package models

import "gopkg.in/mgo.v2/bson"

type Post struct {
	ID        bson.ObjectId `bson:"_id" json:"id"`
	Usuario   string        `bson:"usuario" json:"usuario"`
	Postagem  string        `bson:"postagem" json:"postagem"`
	Curtidas  int           `bson:"curtidas" json:"curtidas"`
	Feedbacks []Feedback    `bson:"feedbacks" json:"feedbacks"`
	Pop       bool          `bson:"pop" json:"pop"`
	Rock      bool          `bson:"rock" json:"rock"`
	Funk      bool          `bson:"funk" json:"funk"`
	Sertanejo bool          `bson:"sertanejo" json:"sertanejo"`
	Samba     bool          `bson:"samba" json:"samba"`
	Reggae    bool          `bson:"reggae" json:"reggae"`
	Jazz      bool          `bson:"jazz" json:"jazz"`
	Mpb       bool          `bson:"mpb" json:"mpb"`
	Pagode    bool          `bson:"pagode" json:"pagode"`
	Hiphop    bool          `bson:"hiphop" json:"hiphop"`
	Rb        bool          `bson:"rb" json:"rb"`
	Rap       bool          `bson:"rap" json:"rap"`
	Classica  bool          `bson:"classica" json:"classica"`
}
