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
	CriaFeedbackBD(f)
	return c.JSON(http.StatusOK, "Hello, World!")
}
