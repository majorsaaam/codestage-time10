package controller

import (
	"net/http"

	"github.com/labstack/echo"
	. "github.com/majorsaaam/codestage-time10/backend/dao"
	. "github.com/majorsaaam/codestage-time10/backend/models"
	"gopkg.in/mgo.v2/bson"
)

func CriaFeedback(c echo.Context) error {
	f := new(Feedback)
	if err := c.Bind(f); err != nil {
		return err
	}
	f.ID = bson.NewObjectId()
	p, err := GetPostByIDBD(f.IDPost.Hex())
	if err != nil {
		return err
	}
	p.IDFeedbacks = append(p.IDFeedbacks, f.ID)
	CriaFeedbackBD(f)
	AtualizaPostByIDBD(p.ID.Hex(), &p)
	return c.JSON(http.StatusCreated, f)
}
