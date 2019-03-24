package dao

import (
	"fmt"

	. "github.com/majorsaaam/codestage-time10/backend/models"
	"gopkg.in/mgo.v2/bson"
)

const (
	FEEDBACK_COLLECTION = "Feedback"
)

func GetFeedbackByIDBD(id string) (Feedback, error) {
	var f Feedback
	err := Db.C(FEEDBACK_COLLECTION).FindId(bson.ObjectIdHex(id)).One(&f)
	if err != nil {
		return f, fmt.Errorf("Error: %v", err)
	}
	return f, err
}

func CriaFeedbackBD(f *Feedback) error {
	err := Db.C(FEEDBACK_COLLECTION).Insert(f)
	if err != nil {
		return fmt.Errorf("Error: %v", err)
	}
	return err
}

func AtualizaFeedbackByIDBD(id string, f *Feedback) error {
	err := Db.C(FEEDBACK_COLLECTION).UpdateId(bson.ObjectIdHex(id), f)
	if err != nil {
		return fmt.Errorf("Error: %v", err)
	}
	return err
}
