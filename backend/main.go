package main

import (
	"log"

	"github.com/labstack/echo"
	. "github.com/majorsaaam/codestage-time10/backend/controller"
	"github.com/majorsaaam/codestage-time10/backend/dao"
)

func init() {
	c := dao.ConnectData{Server: "localhost:27017", Database: "CODESTAGE"}
	_, err := c.Connect()
	if err != nil {
		log.Fatal(err)
	}
	log.Printf("MongoDB connected")
}

const (
	URL_API = "/api/v1"
)

func main() {
	e := echo.New()
	e.POST(URL_API+"/feedback", CriaFeedback)
	e.POST(URL_API+"/post", CriaPost)
	e.Logger.Fatal(e.Start(":1323"))
}
