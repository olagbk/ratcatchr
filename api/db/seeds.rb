# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
places = Place.create([{
                           name: 'Cazadores de ratas unidos', phone: "932 021 547",
                           address_line_1: "Carrer de Tu Mamá 15", address_line_2: "08024 Barcelona",
                           latitude: 41.416105, longitude: 2.159556},
                       {
                           name: 'Ratamatadores FUCK YEAH', phone: "912 021 532",
                           address_line_1: "Carrer de Puerro 11", address_line_2: "08024 Barcelona",
                           latitude: 41.414849, longitude: 2.163214},
                       {
                           name: 'ALQUILER DE GATOS', phone: "932 758 000",
                           address_line_1: "Carrer de Gatarsis s/n", address_line_2: "08032 Barcelona",
                           latitude: 41.423290, longitude: 2.153913}

                      ])
#   Mayor.create(name: 'Emanuel', city: cities.first)
