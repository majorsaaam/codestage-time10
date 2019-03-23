package dao

import (
	"fmt"

	. "github.com/majorsaaam/codestage-time10/backend/models"
)

const (
	COLLECTION = "Feedback"
)

func CriaFeedbackBD(f *Feedback) error {
	err := Db.C(COLLECTION).Insert(f)
	if err != nil {
		return fmt.Errorf("Error: %v", err)
	}
	return err
}
