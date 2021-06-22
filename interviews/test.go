package main
 
import (
    "encoding/json"
    "fmt"
    "io/ioutil"
    "net/http"
    "net/url"
    "strings"
 
    "github.com/gorilla/mux"
)
 
func (conf *Config) GetInstanceByWs(w http.ResponseWriter, r *http.Request) {
    // swagger:route GET /api/instance/workspace/{WorkspaceUUID}/{ContainerUUID} container getInstanceByWs
    //
    //     Get get instances for a workspace and container ID.
    //
    //
    //     Schemes: https
    //
    //
    //     Responses:
    //       200: success
    //       204: noContent
    //       401: authorizationError
    //       500: internalServerError
 
    vars := mux.Vars(r)
    symbol := vars[SYMBOL]
 
    // queryParams := r.URL.Query()
    // path := queryParams.Get(symbol)
    // if path == "" {
    //  writeError(w, http.StatusInternalServerError, "'symbol' query param is missing")
    //  return
    // }
 
    client := &http.Client{}
    fmt.Println("OSS status URL:%s\n", conf.CryptoURL)
 
    currencyURL := conf.CryptoURL + "/currency/" + symbol
    call("GET", currencyURL, nil)
 
    currencyPricesURL := conf.CryptoURL + "/ticker"
    req, err := http.NewRequest("GET", currencyPricesURL, nil)
    if err != nil {
        return
    }
 
    strings.Join(symbol)
    values := make(map[string][]string)
    values = append(values, symbol)
   
	q := []map[string]string
	q["symbols"] = symbol
	q["test"] = "testing"
 
    call("GET", currencyURL, q)
 
    // do an http get
    resp, err := client.Do(req)
 
    if err != nil {
        //logger.Errorf("[config] Error requesting OSS scan status request: %s\n", err.Error())
        return
    }
 
    //logger.Debugf("Response status code from OSS, Status:%s\n", resp.Status)
    if resp.StatusCode != http.StatusOK {
        //logger.Error("Error occured while processing OSS scan status request")
        //writeError(w, http.StatusInternalServerError, "Error unMarshalling payload json")
        return
    }
    defer resp.Body.Close()
 
    contents, err := ioutil.ReadAll(resp.Body)
 
    fmt.Println("contents:%d", string(contents))
 
    if err != nil {
        //logger.Error("Error while reading response of OSS API scan request")
        return
    }
 
    //thisMap := make(map[string][]map[string]interface{})
 
    //var dat []map[string]interface{}
    //var o []dat
    var response []Response
 
    response[0].ID = symbol
 
    if err := json.Unmarshal(contents, &response); err != nil {
        fmt.Println("error occured:", err.Error())
        return
    }
 
    fmt.Println("response:%+v", response)
    //logger.Debugf("Facets returned:%s\n", dat["workspaceFacets"])
 
    //response.Ask = dat[0]["ask"].(string)
 
    fmt.Println("value:", response)
 
    w.Header().Set("Content-Type", "application/json; charset=UTF-8")
    w.Header().Set("X-Content-Type-Options", "nosniff")
    w.WriteHeader(resp.StatusCode)
 
    json.NewEncoder(w).Encode(response)
 
}
 
func call(method string, url string, queryParams []map[string]string) {
 
    client := &http.Client{}
    req, err := http.NewRequest(method, url, nil)
    if err != nil {
        return
    }
 
    req.Header.Add("Content-Type", "application/json")
    if queryParams != nil {
		q := req.URL.Query();
		for key, value := range queryParams {
			fmt.Println("Key:", key, "=>", "Element:", element)
    		q.Add(key, value)
		}
        req.URL.RawQuery = q.Encode()
    }
 
    // do an http get
    resp, err := client.Do(req)
 
    if err != nil {
        //logger.Errorf("[config] Error requesting OSS scan status request: %s\n", err.Error())
        return
    }
 
}
func writeError(w http.ResponseWriter, errorCode int, errorMessage string) {
    err := APIError{
        ErrorCode:    errorCode,
        ErrorMessage: errorMessage,
    }
    w.Header().Set("Content-Type", "application/json; charset=UTF-8")
    w.Header().Set("X-Content-Type-Options", "nosniff")
    w.WriteHeader(errorCode)
    json.NewEncoder(w).Encode(err)
}
 
//APIError error object
type APIError struct {
    ErrorCode    int    `json:"errorCode"`
    ErrorMessage string `json:"errorMessage"`
}
 
type Response struct {
    ID          string `json:"id,omitempty"`
    FullName    string `json:"fullName,omitempty"`
    Ask         string `json:"ask,omitempty"`
    Bid         string `json:"bid,omitempty"`
    Last        string `json:"last,omitempty"`
    Open        string `json:"open,omitempty"`
    Low         string `json:"low,omitempty"`
    High        string `json:"high,omitempty"`
    FeeCurrency string `json:"feeCurrency,omitempty"`
    // Volume      string `json:"volume,omitempty"`
    // VolumeQuote string `json:"volumeQuote,omitempty"`
    // Timestamp   string `json:"timestamp,omitempty"`
    // Symbol      string `json:"symbol,omitempty"`
}
 
type CurrencyInfo struct {
    ID       string `json:"id,omitempty"`
    FullName string `json:"fullName,omitempty"`
}