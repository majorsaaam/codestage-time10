package dao

import (
	"fmt"

	. "github.com/majorsaaam/codestage-time10/backend/models"
)

const (
	COLLECTION = "Feedback"
)

func CreateFeedback(f Movie) ([]Movie, error) {
	err := Db.C(COLLECTION).Insert(f)
	if err != nil {
		return nil, fmt.Errorf("Error: %v", err)
	}
	return nil, err
}
