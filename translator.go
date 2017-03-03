package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"io/ioutil"
	"os"
	"path/filepath"
	"regexp"
	"strings"
)

var file = flag.String("f", "", "The relative path to the json file")
var src = flag.String("s", "src", "The relative path to the source code")

var missing []string

var j = jsn{}

func main() {
	flag.Parse()
	raw, err := ioutil.ReadFile("./" + *file)
	pan(err)
	json.Unmarshal(raw, &j)
	err = filepath.Walk("./"+*src, match)
	pan(err)

	fmt.Println("Missing translations:")
	fmt.Println(missing)
}

type jsn map[string]string

func pan(err error) {
	if err != nil {
		panic(err)
	}
}

func match(path string, f os.FileInfo, err error) error {
	raw, err := ioutil.ReadFile("./" + path)
	if path == *file {
		return nil
	}
	if err == nil {
		re := regexp.MustCompile(`t\('.*'\)`)
		arr := re.FindAllString(string(raw), -1)
		for _, v := range arr {
			translated(v)
		}
	}
	return nil
}

func translated(text string) {
	text = strings.Split(text, `'`)[1]
	//fmt.Println("FOUND¿?", strings.ToLower(text), j[strings.ToLower(text)] == "")
	if j[strings.ToLower(text)] == "" {
		missing = append(missing, strings.ToLower(text))
	}
}
