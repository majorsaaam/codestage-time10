package dao

import (
	"fmt"

	mgo "gopkg.in/mgo.v2"
)

type ConnectData struct {
	Server   string
	Database string
}

var Db *mgo.Database

func (c *ConnectData) Connect() (*mgo.Session, error) {
	session, err := mgo.Dial(c.Server)
	if err != nil {
		return nil, fmt.Errorf("Error to connect on the server: %v", err)
	}
	session.SetMode(mgo.Monotonic, true)
	Db = session.DB(c.Database)
	return session, nil
}
