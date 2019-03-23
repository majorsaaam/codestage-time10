package main

import (
	"log"
	"net/http"

	"./dao"
	"github.com/labstack/echo"
)

func init() {
	c := dao.ConnectData{Server: "localhost:27017", Database: "CODESTAGE"}
	_, err := c.Connect()
	if err != nil {
		log.Fatal(err)
	}
	log.Printf("MongoDB connected")
}

func main() {
	e := echo.New()
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	})
	e.Logger.Fatal(e.Start(":1323"))
}
