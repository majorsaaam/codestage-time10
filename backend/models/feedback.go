package models

import "gopkg.in/mgo.v2/bson"

type Feedback struct {
	ID             bson.ObjectId `bson:"_id" json:"id"`
	IDPost         bson.ObjectId `bson:"_idPost" json:"idPost"`
	Usuario        string        `bson:"usuario" json:"usuario"`
	Comentario     string        `bson:"comentario" json:"comentario"`
	AvaliacaoAutor bool          `bson:"avaliacao_autor" json:"avaliacao_autor"`
	AvaliacaoFas   int           `bson:"avaliacao_fas" json:"avaliacao_fas"`
}
