package dao

import (
	"fmt"

	. "github.com/majorsaaam/codestage-time10/backend/models"
)

const (
	FEEDBACK_COLLECTION = "Feedback"
)

func CriaFeedbackBD(f *Feedback) error {
	err := Db.C(FEEDBACK_COLLECTION).Insert(f)
	if err != nil {
		return fmt.Errorf("Error: %v", err)
	}
	return err
}
