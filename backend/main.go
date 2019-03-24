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

	e.POST(URL_API+"/feedbacks", CriaFeedback)
	e.PUT(URL_API+"/feedbacks/adicionaCurtida/:id", AdicionaCurtidaFeedback)
	e.PUT(URL_API+"/feedbacks/adicionaCurtidaAutor/:id", AdicionaCurtidaAutorFeedback)

	e.POST(URL_API+"/posts", CriaPost)
	e.GET(URL_API+"/posts", GetAllPost)
	e.GET(URL_API+"/posts/:id", GetPost)
	e.PUT(URL_API+"/posts/adicionaCurtida/:id", AdicionaCurtidaPost)

	e.Logger.Fatal(e.Start(":1323"))
}
