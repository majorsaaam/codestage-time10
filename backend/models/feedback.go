package models

import "gopkg.in/mgo.v2/bson"

type Feedback struct {
	ID         bson.ObjectId `bson:"_id" json:"id"`
	Usuario    string        `bson:"usuario" json:"usuario"`
	Curtida    bool          `bson:"curtida" json:"curtida"`
	Comentario string        `bson:"comentario" json:"comentario"`
}
