package main

import (
    "log"
    "net/http"
    "github.com/iamloganwalsh/stock-trading-simulator/routes"
)

func main() {
    http.HandleFunc("/user/register", routes.RegisterUser)
    http.HandleFunc("/user/login", routes.LoginUser)

    log.Println("Starting server on :8080...")
    log.Fatal(http.ListenAndServe(":8080", nil))
}
