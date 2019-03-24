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

func GetFeedback(c echo.Context) error {
	id := c.Param("id")
	f, err := GetFeedBackByIDBD(id)
	if err != nil {
		return err
	}
	return c.JSON(http.StatusOK, f)
}

func AdicionaCurtidaFeedback(c echo.Context) error {
	id := c.Param("id")
	f, err := GetFeedbackByIDBD(id)
	if err != nil {
		return err
	}
	f.AvaliacaoFas += 1
	AtualizaFeedbackByIDBD(id, &f)
	return c.JSON(http.StatusOK, f)
}

func AdicionaCurtidaAutorFeedback(c echo.Context) error {
	id := c.Param("id")
	f, err := GetFeedbackByIDBD(id)
	if err != nil {
		return err
	}
	f.AvaliacaoAutor = !f.AvaliacaoAutor
	AtualizaFeedbackByIDBD(id, &f)
	return c.JSON(http.StatusOK, f)
}
