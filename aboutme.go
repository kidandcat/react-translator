package main

import (
	"flag"
	"fmt"
	"net/http"
)

var PORT = flag.String("port", "9999", "port")

func main() {
	fmt.Println("Starting server...")
	http.Handle("/aboutme/", http.StripPrefix("/aboutme", http.FileServer(http.Dir("docs"))))
	fmt.Println("Server listening in port", *PORT)
	if err := http.ListenAndServe(":"+*PORT, nil); err != nil {
		fmt.Println("Error...", err)
	}
}
