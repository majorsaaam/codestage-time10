package models

import "gopkg.in/mgo.v2/bson"

type Movie struct {
	ID          bson.ObjectId `bson:"_id" json:"id"`
	Usuario     string        `bson:"usuario" json:"name"`
	Curtida   	bool        `bson:"curtida" json:"curtida"`
	Comentario string        `bson:"comentario" json:"comentario"`
}