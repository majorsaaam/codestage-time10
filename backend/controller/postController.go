package controller

import (
	"net/http"

	"github.com/labstack/echo"
	. "github.com/majorsaaam/codestage-time10/backend/dao"
	. "github.com/majorsaaam/codestage-time10/backend/models"
	"gopkg.in/mgo.v2/bson"
)

func CriaPost(c echo.Context) error {
	p := new(Post)
	if err := c.Bind(p); err != nil {
		return err
	}
	p.ID = bson.NewObjectId()
	CriaPostBD(p)
	return c.JSON(http.StatusCreated, nil)
}

func GetPost(c echo.Context) error {
	id := c.Param("id")
	p, err := GetPostByIDBD(id)
	if err != nil {
		return err
	}
	return c.JSON(http.StatusOK, p)
}

func GetAllPost(c echo.Context) error {
	p, err := GetAllPostBD()
	if err != nil {
		return err
	}
	return c.JSON(http.StatusOK, p)
}
