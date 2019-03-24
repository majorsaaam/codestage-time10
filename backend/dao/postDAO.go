package dao

import (
	"fmt"

	"gopkg.in/mgo.v2/bson"

	. "github.com/majorsaaam/codestage-time10/backend/models"
)

const (
	POST_COLLECTION = "Post"
)

func GetPostByIDBD(id string) (Post, error) {
	var post Post
	err := Db.C(POST_COLLECTION).FindId(bson.ObjectIdHex(id)).One(&post)
	if err != nil {
		return post, fmt.Errorf("Error: %v", err)
	}
	return post, err
}

func GetAllPostBD() ([]Post, error) {
	var posts []Post
	err := Db.C(POST_COLLECTION).Find(bson.M{}).All(&posts)
	if err != nil {
		return posts, fmt.Errorf("Error: %v", err)
	}
	return posts, err
}

func CriaPostBD(p *Post) error {
	err := Db.C(POST_COLLECTION).Insert(p)
	if err != nil {
		return fmt.Errorf("Error: %v", err)
	}
	return err
}

func AtualizaPostByIDBD(id string, p *Post) error {
	err := Db.C(POST_COLLECTION).UpdateId(bson.ObjectIdHex(id), p)
	if err != nil {
		return fmt.Errorf("Error: %v", err)
	}
	return err
}
