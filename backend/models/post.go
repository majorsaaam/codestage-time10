package models

import "gopkg.in/mgo.v2/bson"

type Post struct {
	ID           bson.ObjectId   `bson:"_id" json:"id"`
	IDFeedbacks  []bson.ObjectId `bson:"_ids_feedbacks" json:"ids_feedbacks"`
	Usuario      string          `bson:"usuario" json:"usuario"`
	Titulo       string          `bson:"titulo" json:"titulo"`
	TipoPostagem string          `bson:"tipo_postagem" json:"tipo_postagem"`
	Postagem     string          `bson:"postagem" json:"postagem"`
	Curtidas     int             `bson:"curtidas" json:"curtidas"`
	Tags         []string        `bson:"tags" json:"tags"`
	Habilidades  []string        `bson:"habilidades" json:"habilidades"`
}
