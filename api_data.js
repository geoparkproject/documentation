define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "doc/version_1_0_0/archives/main.js",
    "group": "/home/matheus/Área de Trabalho/geopark/backend/doc/version_1_0_0/archives/main.js",
    "groupTitle": "/home/matheus/Área de Trabalho/geopark/backend/doc/version_1_0_0/archives/main.js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/",
    "title": "01.Home",
    "version": "1.0.0",
    "group": "General",
    "description": "<p>Informações da básicas da API.</p>",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome da API</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>Versão da API</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK    \n{\n    \"name\": \"Backend Geopark\",\n    \"version\": \"1.0.0\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/general.js",
    "groupTitle": "General",
    "name": "Get"
  },
  {
    "type": "get",
    "url": "/users/profile",
    "title": "04.Visualizar dados",
    "version": "1.0.0",
    "group": "General",
    "description": "<p>Permite ao usuário logado visualize suas informações.</p>",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "avatar_url",
            "description": "<p>Endereço da imagem do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Nome único do arquivo do profile do usuário</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>Objeto com o informações do tipo de usuário</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>Id do tipo do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>Descrição do tipo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK    \n{\n    \"avatar_url\": \"http://localhost:3333/files/user_profile/anonymous.png\",\n    \"name\": \"Rodrigo Cardoso\",\n    \"genre\": \"M\",\n    \"email\": \"rodrigocardoso@geopark.com.br\",\n    \"avatar\": null,\n    \"user_type\": {\n      \"id\": 1,\n      \"type\": \"administrator\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/general.js",
    "groupTitle": "General",
    "name": "GetUsersProfile",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/recovery_password",
    "title": "02.Email de Recuperação",
    "version": "1.0.0",
    "group": "General",
    "description": "<p>Rota para gerar o token de recuperação de senha e envio do email com o token.</p>",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo de requisição:",
        "content": "{\n    \"email\": \"jonhdoe@email.com\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "<ul> <li></li> </ul>",
            "optional": false,
            "field": "-",
            "description": "<p>Confirmação do envio de email de recuperação com token de acesso</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Campos inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid fields.\"\n}",
          "type": "json"
        },
        {
          "title": "Usuário inexistente - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"User not exists.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/general.js",
    "groupTitle": "General",
    "name": "PostRecovery_password"
  },
  {
    "type": "put",
    "url": "/reset_password",
    "title": "03.Atualização da Senha",
    "version": "1.0.0",
    "group": "General",
    "description": "<p>Rota para receber o token de atualização com a nova senha.</p>",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token para validação de recuperação</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Nova senha do usuário</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "confirmPassword",
            "description": "<p>Confimação da nova senha cadastrada</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo de requisição:",
        "content": "{\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"\n    \"password\": \"newPassword\",\n    \"confirmPassword\": \"newPassword\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "<ul> <li></li> </ul>",
            "optional": false,
            "field": "-",
            "description": "<p>Confirmação que a senha foi atualizada com sucesso.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Campos inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid fields.\"\n}",
          "type": "json"
        },
        {
          "title": "Usuário inexistente - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"User not exists.\"\n}",
          "type": "json"
        },
        {
          "title": "Expiração do Token - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Time expires.\"\n}",
          "type": "json"
        },
        {
          "title": "Token Inválido - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Token Inválid.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/general.js",
    "groupTitle": "General",
    "name": "PutReset_password"
  },
  {
    "type": "get",
    "url": "/solicitations/geosites/researcher",
    "title": "03.Listar Solicitações",
    "version": "1.0.0",
    "group": "Mobile",
    "description": "<p>Rota onde o pesquisador poderá listar todos as solicitações de pesquisas que ele precisa fazer.</p>",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id da solicitação</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id_adm",
            "description": "<p>Id do administrador que indicou a pesquisa</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id_geosite_report",
            "description": "<p>Id que representa qual relatório do geoparque essa pesquisa será atribuída</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "geosite",
            "description": "<p>Informações do geossítio para a construção do arquivo de pesquisa</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "geosite.image_url",
            "description": "<p>Imagem correspondente ao geossítio</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "geosite.id",
            "description": "<p>Id do geossítio</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "geosite.name",
            "description": "<p>Nome do geossítio</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "geosite.address",
            "description": "<p>Endereço do geossítio</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "geosite.image",
            "description": "<p>Nome do arquivo da imagem</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "geosite.attractions",
            "description": "<p>Array Contendo informações de cada atração do geossítio para a devida pesquisa</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "geosite.attractions.id",
            "description": "<p>Id da atração</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "geosite.attractions.name",
            "description": "<p>Nome da atração</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação do elemento</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da ultima atualização nesse objeto</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"id\": 1,\n    \"id_adm\": 1,\n    \"id_geosite_report\": 1,\n    \"geosite\": {\n      \"image_url\": \"http://localhost:3333/files/user_profile/anonymous.png\",\n      \"id\": 3,\n      \"name\": \"Floresta Petrificada do Cariri\",\n      \"address\": \"Cidade - Ceará\",\n      \"image\": null,\n      \"attractions\": [\n        {\n          \"id\": 15,\n          \"name\": \"Rocky Wall\"\n        },\n        {\n          \"id\": 16,\n          \"name\": \"Fossil Trunks\"\n        }\n      ]\n    }\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/mobile.js",
    "groupTitle": "Mobile",
    "name": "GetSolicitationsGeositesResearcher",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/reports/attractions/:id_solicitation",
    "title": "04.Enviar a Pesquisa",
    "version": "1.0.0",
    "group": "Mobile",
    "description": "<p>Permite que o usuário pesquisador envie os dados da pesquisa de um geossítio. Ao longo do preenchimento das informações da pesquisa, o aplicativo deve ser responsável por criar um arquivo json com todos esse dados para o envio, ressaltando que no arquivo é necessário um atributo image com o nome da foto que será enviada no array do multipart form data para que haja um link entre o ponto e seus dados respectivos dados e o próprio arquivo de imagem.</p>",
    "parameter": {
      "fields": {
        "Param": [
          {
            "group": "Param",
            "type": "Integer",
            "optional": false,
            "field": "id_solicitation",
            "description": "<p>Id da solicitação da pesquisa que o usuário recebeu</p>"
          }
        ],
        "Body - Multipart Form Data": [
          {
            "group": "Body - Multipart Form Data",
            "type": "Integer",
            "optional": false,
            "field": "id_geosite_report",
            "description": "<p>ID que representa a pesquisa do geossítio para controle de versão</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "File",
            "optional": false,
            "field": "attractions",
            "description": "<p>Arquivo JSON contendo informações da pesquisa que serão coletadas pelo app</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "File",
            "optional": false,
            "field": "images",
            "description": "<p>Campo de imagem onde serão passadas todas as imagens de cada atributo da pesquisa. (Lembrando que ele será um array de arquivos de imagem tendo em vista a quantidades de pontos das pesquisas) [*.jpg, *.jpeg, *.png]</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo de requisição:",
        "content": "id_geosite_report = 1\nattractions = JSON\nimages = [imagem1.jpg, imagem2.jpg, ..., imagem34.jpg]",
        "type": "multpart/form"
      },
      {
        "title": "Exemplo do Arquivo JSON com as informações da pesquisa:",
        "content": "\"Esse arquivo ele é um array onde contém os dados de cada a atração para isso o campo id de cada objeto \nrepresenta o id da atração, sendo que cada atração possui os tópicos de demand, zone, management e impacts. \nO impacts ele subdivide em outros, como também, cada requisito possui seu próprio id de atributo, desde o demand, \nzone, management e impact com suas subdivisões, cada id de atributo deve ser passado no arquivo para que cada \ninformação seja persistida corretamente no banco, o grade representa a nota que pode ser dada pelo \nvalor null ou 0, 1, 2 e 3. Por fim, as informações das imagens\"\n\n\"id_attribute - Atributo\"\n\"1  - demand\"\t\t\t\n\"2  - zone\"\t\t\n\"3  - management\"\t\t\t\n\"4  - Improper disposal of waste, residues and spinoffs\"\t\t\t\n\"5  - Damage to signaling boards and others\"\t\t\t\n\"6  - Damage to buildings, sculptures and others\"\t\t\t\n\"7  - Graffiti and depredation in geological heritage\"\t\t\t\n\"8  - Erosive grooves and changes in soil properties\"\t\t\t\n\"9  - Geological and geomorphological risks\"\t\t\t\n\"10 - Noise and visual pollution\"\t\t\t\n\"11 - Trampling, hunting, seizure and risk of extinction of species\"\t\t\t\n\"12 - Production of refuse, waste and spin-offs\"\t\t\t\n\"13 - Forest damage and uncontrolled native vegetation\"\t\t\t\n\"14 - Pollution and evident discharge in water sources\"\t\t\t\n\"15 - Mining, excavation and drilling\"\t\t\t\n\"16 - Reports of illegal trade in fossils, historical artifacts and others\"\t\t\t\n\"17 - Uncontrolled redirecting of water sources\"\n\n\"Exemplo do Arquivo\"\n\n[\n  {\n    \"id\": 15,\n    \"demand\": {\n      \"id_attribute\": 1,\n      \"grade\": 1,\n      \"image\": {\n        \"name\": \"imagem1.jpg\",\n        \"latitude\": 0.45484,\n        \"longitude\": 0.45484\n      }\n    },\n    \"zone\": {\n      \"id_attribute\": 2,\n      \"grade\": 2,\n      \"image\": {\n        \"name\": \"imagem2.jpg\",\n        \"latitude\": 0.45484,\n        \"longitude\": 0.45484\n      }\n    },\n    \"management\": {\n      \"id_attribute\": 3,\n      \"grade\": 2,\n      \"image\": {\n        \"name\": \"imagem3.jpg\",\n        \"latitude\": 0.45484,\n        \"longitude\": 0.45484\n      }\n    },\n    \"impacts\": [\n      {\n        \"id_attribute\": 4,\n        \"grade\": 1,\n        \"image\": {\n          \"name\": \"imagem4.jpg\",\n          \"latitude\": 0.45484,\n          \"longitude\": 0.45484\n        }\n      },\n      {\n        \"id_attribute\": 5,\n        \"grade\": 1,\n        \"image\": {\n          \"name\": \"imagem5.jpg\",\n          \"latitude\": 0.45484,\n          \"longitude\": 0.45484\n        }\n      },\n      {\n        \"id_attribute\": 6,\n        \"grade\": 1,\n        \"image\": {\n          \"name\": \"imagem6.jpg\",\n          \"latitude\": 0.45484,\n          \"longitude\": 0.45484\n        }\n      },\n      {\n        \"id_attribute\": 7,\n        \"grade\": 1,\n        \"image\": {\n          \"name\": \"imagem7.jpg\",\n          \"latitude\": 0.45484,\n          \"longitude\": 0.45484\n        }\n      },\n      {\n        \"id_attribute\": 8,\n        \"grade\": 1,\n        \"image\": {\n          \"name\": \"imagem8.jpg\",\n          \"latitude\": 0.45484,\n          \"longitude\": 0.45484\n        }\n      },\n      {\n        \"id_attribute\": 9,\n        \"grade\": 1,\n        \"image\": {\n          \"name\": \"imagem9.jpg\",\n          \"latitude\": 0.45484,\n          \"longitude\": 0.45484\n        }\n      },\n      {\n        \"id_attribute\": 10,\n        \"grade\": 1,\n        \"image\": {\n          \"name\": \"imagem10.jpg\",\n          \"latitude\": 0.45484,\n          \"longitude\": 0.45484\n        }\n      },\n      {\n        \"id_attribute\": 11,\n        \"grade\": 1,\n        \"image\": {\n          \"name\": \"imagem11.jpg\",\n          \"latitude\": 0.45484,\n          \"longitude\": 0.45484\n        }\n      },\n      {\n        \"id_attribute\": 12,\n        \"grade\": 1,\n        \"image\": {\n          \"name\": \"imagem12.jpg\",\n          \"latitude\": 0.45484,\n          \"longitude\": 0.45484\n        }\n      },\n      {\n        \"id_attribute\": 13,\n        \"grade\": 1,\n        \"image\": {\n          \"name\": \"imagem13.jpg\",\n          \"latitude\": 0.45484,\n          \"longitude\": 0.45484\n        }\n      },\n      {\n        \"id_attribute\": 14,\n        \"grade\": 1,\n        \"image\": {\n          \"name\": \"imagem14.jpg\",\n          \"latitude\": 0.45484,\n          \"longitude\": 0.45484\n        }\n      },\n      {\n        \"id_attribute\": 15,\n        \"grade\": 1,\n        \"image\": {\n          \"name\": \"imagem15.jpg\",\n          \"latitude\": 0.45484,\n          \"longitude\": 0.45484\n        }\n      },\n      {\n        \"id_attribute\": 16,\n        \"grade\": 1,\n        \"image\": {\n          \"name\": \"imagem16.jpg\",\n          \"latitude\": 0.45484,\n          \"longitude\": 0.45484\n        }\n      },\n      {\n        \"id_attribute\": 17,\n        \"grade\": 1,\n        \"image\": {\n          \"name\": \"imagem17.jpg\",\n          \"latitude\": 0.45484,\n          \"longitude\": 0.45484\n        }\n      }\n    ]\n  },\n  {\n    \"id\": 16,\n    \"demand\": {\n      \"id_attribute\": 1,\n      \"grade\": 1,\n      \"image\": {\n        \"name\": \"imagem18.jpg\",\n        \"latitude\": 0.45484,\n        \"longitude\": 0.45484\n      }\n    },\n    \"zone\": {\n      \"id_attribute\": 2,\n      \"grade\": 2,\n      \"image\": {\n        \"name\": \"imagem19.jpg\",\n        \"latitude\": 0.45484,\n        \"longitude\": 0.45484\n      }\n    },\n    \"management\": {\n      \"id_attribute\": 3,\n      \"grade\": 2,\n      \"image\": {\n        \"name\": \"imagem20.jpg\",\n        \"latitude\": 0.45484,\n        \"longitude\": 0.45484\n      }\n    },\n    \"impacts\": [\n      {\n        \"id_attribute\": 4,\n        \"grade\": 2,\n        \"image\": {\n          \"name\": \"imagem21.jpg\",\n          \"latitude\": 0.45484,\n          \"longitude\": 0.45484\n        }\n      },\n      {\n        \"id_attribute\": 5,\n        \"grade\": 2,\n        \"image\": {\n          \"name\": \"imagem22.jpg\",\n          \"latitude\": 0.45484,\n          \"longitude\": 0.45484\n        }\n      },\n      {\n        \"id_attribute\": 6,\n        \"grade\": 2,\n        \"image\": {\n          \"name\": \"imagem23.jpg\",\n          \"latitude\": 0.45484,\n          \"longitude\": 0.45484\n        }\n      },\n      {\n        \"id_attribute\": 7,\n        \"grade\": 2,\n        \"image\": {\n          \"name\": \"imagem24.jpg\",\n          \"latitude\": 0.45484,\n          \"longitude\": 0.45484\n        }\n      },\n      {\n        \"id_attribute\": 8,\n        \"grade\": 2,\n        \"image\": {\n          \"name\": \"imagem25.jpg\",\n          \"latitude\": 0.45484,\n          \"longitude\": 0.45484\n        }\n      },\n      {\n        \"id_attribute\": 9,\n        \"grade\": 2,\n        \"image\": {\n          \"name\": \"imagem26.jpg\",\n          \"latitude\": 0.45484,\n          \"longitude\": 0.45484\n        }\n      },\n      {\n        \"id_attribute\": 10,\n        \"grade\": 2,\n        \"image\": {\n          \"name\": \"imagem27.jpg\",\n          \"latitude\": 0.45484,\n          \"longitude\": 0.45484\n        }\n      },\n      {\n        \"id_attribute\": 11,\n        \"grade\": 2,\n        \"image\": {\n          \"name\": \"imagem28.jpg\",\n          \"latitude\": 0.45484,\n          \"longitude\": 0.45484\n        }\n      },\n      {\n        \"id_attribute\": 12,\n        \"grade\": 2,\n        \"image\": {\n          \"name\": \"imagem29.jpg\",\n          \"latitude\": 0.45484,\n          \"longitude\": 0.45484\n        }\n      },\n      {\n        \"id_attribute\": 13,\n        \"grade\": 2,\n        \"image\": {\n          \"name\": \"imagem30.jpg\",\n          \"latitude\": 0.45484,\n          \"longitude\": 0.45484\n        }\n      },\n      {\n        \"id_attribute\": 14,\n        \"grade\": 2,\n        \"image\": {\n          \"name\": \"imagem31.jpg\",\n          \"latitude\": 0.45484,\n          \"longitude\": 0.45484\n        }\n      },\n      {\n        \"id_attribute\": 15,\n        \"grade\": 2,\n        \"image\": {\n          \"name\": \"imagem32.jpg\",\n          \"latitude\": 0.45484,\n          \"longitude\": 0.45484\n        }\n      },\n      {\n        \"id_attribute\": 16,\n        \"grade\": 2,\n        \"image\": {\n          \"name\": \"imagem33.jpg\",\n          \"latitude\": 0.45484,\n          \"longitude\": 0.45484\n        }\n      },\n      {\n        \"id_attribute\": 17,\n        \"grade\": 2,\n        \"image\": {\n          \"name\": \"imagem34.jpg\",\n          \"latitude\": 0.45484,\n          \"longitude\": 0.45484\n        }\n      }\n    ]\n  }\n]",
        "type": "multpart/form"
      }
    ],
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "<ul> <li></li> </ul>",
            "optional": false,
            "field": "-",
            "description": "<p>Confirmação do envio com sucesso</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Quando um usuário tenta enviar a pesquisa que não foi direcionada a ele - Error-Response:",
          "content": "HTTP/1.1 403 Error\n{\n    \"error\": \"Do you not have permission.\"\n}",
          "type": "json"
        },
        {
          "title": "Quando o usuário tenta reenviar uma pesquisa já fechada - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"The solicitation is no longer open.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/mobile.js",
    "groupTitle": "Mobile",
    "name": "PostReportsAttractionsId_solicitation",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/sessions",
    "title": "01.Login/Mobile",
    "version": "1.0.0",
    "group": "Mobile",
    "description": "<p>Rota de autenticação para aplicação mobile.</p>",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha do usuário</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Objeto contendo informações do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>Email do usuário autenticado</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": "<p>Nome do usuário autenticado</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "user.user_type",
            "description": "<p>Objeto contendo informações sobre o nível de permissão</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "user.user_type.id",
            "description": "<p>Indentificador do tipo de permissão</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "user.user_type.type",
            "description": "<p>Tipo do nível de permissão</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"user\": {\n        \"email\": \"jonh@email.com\",\n        \"name\": \"Jonh Doe\",\n        \"user_type\": {\n            \"id\": 2,\n            \"type\": \"researcher\"\n        }\n    }\n    \"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Campos inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid fields.\"\n}",
          "type": "json"
        },
        {
          "title": "Email ou senha inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Email or password invalid.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/mobile.js",
    "groupTitle": "Mobile",
    "name": "PostSessions"
  },
  {
    "type": "put",
    "url": "/users/researcher",
    "title": "02.Atualizar os dados",
    "version": "1.0.0",
    "group": "Mobile",
    "description": "<p>Permite ao usuário dentro da aplicação mobile atualizar seus dados.</p>",
    "parameter": {
      "fields": {
        "Body - Multipart Form Data": [
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do usuário</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Nova Senha do usuário</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "File",
            "optional": false,
            "field": "avatar",
            "description": "<p>Campo da imagem do usuário [*.jpg, *.jpeg, *.png]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "avatar_url",
            "description": "<p>Endereço da imagem do usuário</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Nome único do arquivo do profile do usuário</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Data da última atualização do usuário</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>Objeto com o informações do tipo de usuário</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>Id do tipo do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>Descrição do tipo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"avatar_url\": \"http://localhost:3333/files/user_profile/4c5a37ed8ede1b9efa0e993c2daac0fb.jpeg\",\n    \"id\": 15,\n    \"name\": \"Matheus Maximiano\",\n    \"genre\": \"M\",\n    \"email\": \"matheus@email.com\",\n    \"avatar\": \"4c5a37ed8ede1b9efa0e993c2daac0fb.jpeg\",\n    \"user_type\": {\n      \"id\": 2,\n      \"type\": \"researcher\"\n    },\n    \"updatedAt\": \"2020-05-08T20:56:07.094Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Campos inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid fields.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/mobile.js",
    "groupTitle": "Mobile",
    "name": "PutUsersResearcher",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/geoparks/geosites/attractions/:id",
    "title": "19.Deletar Atrações",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador delete os dados das atrações, a partir do id referente do mesmo. Essa exclusão não destroi o registro apenas ativa uma flag de exclusão permitindo a recuperação das informações e também não comprometendo os dados das pesquisas.</p>",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "optional": false,
            "field": "id",
            "description": "<p>ID da atração no qual se deseja excluir os dados</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "<ul> <li></li> </ul>",
            "optional": false,
            "field": "-",
            "description": "<p>Resultado da requisição positiva sem conteúdo na resposta</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Parâmentro Inválido - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"URL params validation fail.\"\n}",
          "type": "json"
        },
        {
          "title": "Atração Inválida - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid Attraction.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "DeleteGeoparksGeositesAttractionsId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/geoparks/geosites/:id",
    "title": "15.Deletar geossítios",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador delete os dados dos geossítios, a partir do id referente do mesmo. Essa exclusão não destroi o registro apenas ativa uma flag de exclusão permitindo a recuperação das informações e também não comprometendo os dados das pesquisas.</p>",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "optional": false,
            "field": "id",
            "description": "<p>ID do geossítio no qual se deseja excluir os dados</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "<ul> <li></li> </ul>",
            "optional": false,
            "field": "-",
            "description": "<p>Resultado da requisição positiva sem conteúdo na resposta</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Parâmentro Inválido - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid Params.\"\n}",
          "type": "json"
        },
        {
          "title": "Geossítio Inválido - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid Geosite.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "DeleteGeoparksGeositesId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/geoparks/:id",
    "title": "10.Deletar geoparques",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador delete os dados dos geoparques, a partir do id referente do mesmo. Essa exclusão não destroi o registro apenas ativa uma flag de exclusão permitindo a recuperação das informações e também não comprometendo os dados das pesquisas.</p>",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "optional": false,
            "field": "id",
            "description": "<p>ID do geoparque no qual se deseja deletar seus dados</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "<ul> <li></li> </ul>",
            "optional": false,
            "field": "-",
            "description": "<p>Resultado da requisição positiva sem conteúdo na resposta</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Parâmentros Inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid Params.\"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "DeleteGeoparksId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "06.Deletar usuários",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador delete os dados de outros usuários, desde que sejam apenas pesquisadores, a partir do id referente ao usuário. Essa exclusão não destroi o registro apenas ativa uma flag de exclusão permitindo a recuperação das informações e também não comprometendo os dados das pesquisas.</p>",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "optional": false,
            "field": "id",
            "description": "<p>ID do usuário no qual se deseja deletar seus dados</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>Resposta de sucesso ao completar a ação.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"success\": \"User successfully deleted.\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Campo do id inválido - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"The user id is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "Usuário Inválido - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid user.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "DeleteUsersId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/geoparks",
    "title": "07.Listar todos os geoparques",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador liste todos os geoparques cadastrados na aplicação, que não estejam excluídos.</p>",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id do Geopark</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do geoparque</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>País onde se localiza o geoparque</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "hidden",
            "description": "<p>Flag que representa se um geoparque foi excluído ou não</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Nome do arquivo da imagem do geoparque</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>Url da imagem do geoparque</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id_type",
            "description": "<p>Id representante do tipo do usuário</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação do elemento</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da ultima atualização nesse objeto</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n     {\n         \"image_url\": \"http://localhost:3333/files/user_profile/anonymous.png\",\n         \"id\": 1,\n         \"name\": \"Parque Geológico do Araripe\",\n         \"country\": \"Brasil\",\n         \"hidden\": false,\n         \"image\": null,\n         \"createdAt\": \"2020-04-28T22:53:51.138Z\",\n         \"updatedAt\": \"2020-04-28T22:53:51.138Z\"\n     },\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "GetGeoparks",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/geoparks/geosites/:id",
    "title": "12.Listar todos os geossítios",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador recupere as informaçãoes de um geossítio a partir de seu id em específico.</p>",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "optional": false,
            "field": "id",
            "description": "<p>ID do geossítio.</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id do geossítio</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do geossítio</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Endereço da do geossítio contando com o nome da cidade e o Estado/Província/Região</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Nome do arquivo da imagem do geossítio</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>Url da imagem do geossítio</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id_geopark",
            "description": "<p>Id do geoparque a qual o geossítio pertence</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "hidden",
            "description": "<p>Flag que representa se um geossítio foi excluído ou não</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação do elemento</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da ultima atualização nesse objeto</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"id\": 1,\n     \"name\": \"Colina do Horto\",\n     \"address\": \"Cidade - Ceará\",\n     \"image\": null,\n     \"image_url\": \"http://localhost:3333/files/user_profile/anonymous.png\",\n     \"id_geopark\": 1\n     \"hidden\": false,\n     \"createdAt\": \"2020-04-28T22:53:51.169Z\",\n     \"updatedAt\": \"2020-04-28T22:53:51.169Z\",\n }",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "GetGeoparksGeositesId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/geoparks/geosites/:id_geosite/attractions",
    "title": "16.Listar atrações de um geossítio",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador recupere as informaçãoes das atrações de um geossítio a partir de seu id em específico.</p>",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "optional": false,
            "field": "id",
            "description": "<p>ID do geossítio.</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id da atração</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome da atração</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "hidden",
            "description": "<p>Flag que representa se a atração foi excluído ou não</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação do elemento</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da ultima atualização nesse objeto</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id_geosite",
            "description": "<p>Id do geossítio no qual a atração pertence.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n     {\n         \"id\": 1,\n         \"name\": \"Chapel of the Holy Sepulcher\",\n         \"hidden\": false,\n         \"createdAt\": \"2020-04-28T22:53:51.169Z\",\n         \"updatedAt\": \"2020-04-28T22:53:51.169Z\",\n         \"id_geopark\": 1\n     }\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "GetGeoparksGeositesId_geositeAttractions",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/geoparks/:id_geopark/geosites",
    "title": "11.Listar todos os geossítios",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador liste todos os geossístios cadastrados na aplicação, a partir do id do geoparque em específico e que não estejam excluídos.</p>",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "optional": false,
            "field": "id_geopark",
            "description": "<p>ID do geoparque no qual os geossítios pertencem.</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id do geossítio</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do geossítio</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Endereço da do geossítio contando com o nome da cidade e o Estado/Província/Região</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Nome do arquivo da imagem do geossítio</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>Url da imagem do geossítio</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id_geopark",
            "description": "<p>Id do geoparque a qual o geossítio pertence</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "hidden",
            "description": "<p>Flag que representa se um geossítio foi excluído ou não</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação do elemento</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da ultima atualização nesse objeto</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n     {\n         \"id\": 1,\n         \"name\": \"Colina do Horto\",\n         \"address\": \"Cidade - Ceará\",\n         \"image\": null,\n         \"image_url\": \"http://localhost:3333/files/user_profile/anonymous.png\",\n         \"id_geopark\": 1\n         \"hidden\": false,\n         \"createdAt\": \"2020-04-28T22:53:51.169Z\",\n         \"updatedAt\": \"2020-04-28T22:53:51.169Z\",\n     },\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "GetGeoparksId_geoparkGeosites",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/reports/attractions/geosite/:id_geosite",
    "title": "28.Lista o todos os relatórios das atrações por meio do id de um geossítio",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador liste os relatórios das atrações que pertecem a um geossítio.</p>",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Integer",
            "optional": false,
            "field": "id_geosite",
            "description": "<p>ID de um geossítio para especificar quais são os relatórios de atrações serão obtidos.</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id do relatório da atração</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "demand",
            "description": "<p>Valor de demanda atribuído aquela atração naquela pesquisa</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "zone",
            "description": "<p>Valor de zona atribuído aquela atração naquela pesquisa</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "management",
            "description": "<p>Valor de gerenciamento atribuído aquela atração naquela pesquisa</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "impact",
            "description": "<p>Média dos valores atribuidos nos subtópicos de impactos atribuidos à atração naquela pesquisa</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Data na qual a pesquisa foi concluída.</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Flag que representa se a pesquisa já foi concluída, em outras palavras, se é dinâmica ou fechada.</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação do elemento</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da ultima atualização nesse objeto</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id_geosite_report",
            "description": "<p>Id do relatório do geossítio no qual esse relatório da atração está vinculado.</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id_attraction",
            "description": "<p>Id da atração</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "geosite_report",
            "description": "<p>Objeto contendo informações básicas sobre o relatório do geossítio</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "geosite_report.id_final_report",
            "description": "<p>Id do relatório final no qual esse relatório da atração está vinculado.</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "geosite_report.id_solicitation",
            "description": "<p>Id da solicitação de pesquisa.</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "geosite_report.id_geosite",
            "description": "<p>Id do geossítio a qual essa atração pertence.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n     {\n         \"id\": 1,\n         \"demand\": 3,\n         \"zone\": 1,\n         \"management\": 1,\n         \"impact\": 1,\n         \"date\": \"2020-09-15T15:55:09.395Z\",\n         \"status\": true,\n         \"createdAt\": \"2020-09-15T15:55:09.395Z\",\n         \"updatedAt\": \"2020-09-15T15:55:09.395Z\",\n         \"id_geosite_report\": 1,\n         \"id_attraction\": 1,\n         \"geosite_report\": {\n           \"id_final_report\": 1,\n           \"id_solicitation\": 1,\n           \"id_geosite\": 1\n         }\n     },\n     ...\n ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Parâmentros inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid params.\"\n}",
          "type": "json"
        },
        {
          "title": "Geosite Inválido - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Geosite does not exist.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "GetReportsAttractionsGeositeId_geosite",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/reports/attractions/:id_attraction_report",
    "title": "29.Visualiza os dados de relatório de uma atração",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador exiba um relatório de atração pelo seu id.</p>",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Integer",
            "optional": false,
            "field": "id_attraction_report",
            "description": "<p>ID de um relatório de atração.</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id do relatório da atração</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "demand",
            "description": "<p>Valor de demanda atribuído aquela atração naquela pesquisa</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "zone",
            "description": "<p>Valor de zona atribuído aquela atração naquela pesquisa</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "management",
            "description": "<p>Valor de gerenciamento atribuído aquela atração naquela pesquisa</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "impact",
            "description": "<p>Média dos valores atribuidos nos subtópicos de impactos atribuidos à atração naquela pesquisa</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Data na qual a pesquisa foi concluída.</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Flag que representa se a pesquisa já foi concluída, em outras palavras, se é dinâmica ou fechada.</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação do elemento</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da ultima atualização nesse objeto</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id_geosite_report",
            "description": "<p>Id do relatório do geossítio no qual esse relatório da atração está vinculado.</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id_attraction",
            "description": "<p>Id da atração</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"id\": 39,\n     \"demand\": 3,\n     \"zone\": 1,\n     \"management\": 1,\n     \"impact\": 1,\n     \"date\": \"2020-09-17T18:09:50.765Z\",\n     \"status\": true,\n     \"createdAt\": \"2020-09-17T18:09:50.765Z\",\n     \"updatedAt\": \"2020-09-17T18:09:50.765Z\",\n     \"id_geosite_report\": 10,\n     \"id_attraction\": 1\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Parâmentros inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid params.\"\n}",
          "type": "json"
        },
        {
          "title": "Attraction Report Inválido - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Attraction report does not exist.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "GetReportsAttractionsId_attraction_report",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/reports/attractions/:id_attraction_report/grades_images",
    "title": "30.Visualiza as notas e as imagens de acordo com id de um relatório de uma atração",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador exiba cada nota de cada atributo de um relatório de atração e também as informações das imagens à elas associadas, caso exista.</p>",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Integer",
            "optional": false,
            "field": "id_attraction_report",
            "description": "<p>ID de um relatório de atração.</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "grades",
            "description": "<p>Array de objetos contendo as informções das notas de cada atributo do relatório da atração</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "grades.id",
            "description": "<p>Id do objeto que representa a nota com seu atributo e outros valores.</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "grades.grade",
            "description": "<p>A nota atribuida naquele atributo, da pesquisa em questão.</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "grades.createdAt",
            "description": "<p>Data da criação do elemento</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "grades.updatedAt",
            "description": "<p>Data da ultima atualização nesse objeto</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "grades.id_attraction_report",
            "description": "<p>Id do relatório da atração que essa nota está vinculada.</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "grades.id_attribute",
            "description": "<p>Id que representa o atributo em questão</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "grades.Attribute",
            "description": "<p>Objeto contendo a informação do atributo</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "grades.Attribute.name",
            "description": "<p>Nome do atributo</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "images",
            "description": "<p>Array contendo as informações da imagem e qual o atributo ela está vinculada</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "images.id",
            "description": "<p>Id referente ao dados da imagem</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "images.url",
            "description": "<p>Url de acesso da imagem</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "images.latitude",
            "description": "<p>Valor de latitude onde a imagem foi capturada.</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "images.longitude",
            "description": "<p>Valor de longitude onde a imagem foi capturada.</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "images.createdAt",
            "description": "<p>Data da criação do elemento</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "images.updatedAt",
            "description": "<p>Data da ultima atualização nesse objeto</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "images.id_ref_attribute",
            "description": "<p>Id referente ao atributo que a imagem está vinculada</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "images.id_attraction_report",
            "description": "<p>Id do relatório da atração que a imagem está vinculada.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"grades\": [\n         {\n           \"id\": 885,\n           \"grade\": 1,\n           \"createdAt\": \"2020-09-17T18:12:15.262Z\",\n           \"updatedAt\": \"2020-09-17T18:12:15.262Z\",\n           \"id_attraction_report\": 53,\n           \"id_attribute\": 1,\n           \"Attribute\": {\n             \"name\": \"demand\"\n           }\n         },\n         ...\n     ],\n     \"images\": [\n         {\n           \"id\": 1,\n           \"url\": \"/id_12/attraction_15/1600366335152_attribute-1.jpg\",\n           \"latitude\": 0.45484,\n           \"longitude\": 0.45484,\n           \"createdAt\": \"2020-09-17T18:12:15.256Z\",\n           \"updatedAt\": \"2020-09-17T18:12:15.256Z\",\n           \"id_ref_attribute\": 1,\n           \"id_attraction_report\": 53\n         },\n         ...  \n     ],\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Parâmentros inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid params.\"\n}",
          "type": "json"
        },
        {
          "title": "Attraction Report Inválido - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Attraction report does not exist.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "GetReportsAttractionsId_attraction_reportGrades_images",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/reports/final/geopark/closed/id_report",
    "title": "25.Lista o relatório fechado de um geoparque",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador liste os relatórios dos geossítios, mais recentes, referente ao id do relatório final de um geoparque. Esses relatórios mais recentes dos geossítios são os que foram considerados para finalizar o relatório final.</p>",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Integer",
            "optional": false,
            "field": "id_report",
            "description": "<p>ID do relatório final do geoparque para especificar de qual os relatórios dos geossítios devem ser recuperados.</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id do relatório do geossítio</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "geosite",
            "description": "<p>Nome do geossitio</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "demand",
            "description": "<p>Dados finais de demanda do geossítio de acordo com suas atrações</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "management",
            "description": "<p>Dados finais de gerenciamento do geossítio de acordo com suas atrações</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "zone",
            "description": "<p>Dados finais de zona do geossítio de acordo com suas atrações</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "impact",
            "description": "<p>Dados finais de impacto do geossítio de acordo com suas atrações</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "priorityManagement",
            "description": "<p>Prioridade de gerenciamento do geossítio, valor calculado a partir da equação da pesquisa</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Data na qual a pesquisa foi concluída.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n     {\n         \"id\": 1,\n         \"geosite\": \"Colina do Horto\",\n         \"demand\": 2.9,\n         \"management\": 1,\n         \"zone\": 1,\n         \"impact\": 1.1,\n         \"priorityManagement\": 4.1,\n         \"date\": \"2020-09-15T15:55:10.307Z\"\n     },\n     {\n         \"id\": 2,\n         \"geosite\": \"Cachoeira de Missão Velha\",\n         \"demand\": 1,\n         \"management\": 2,\n         \"zone\": 3,\n         \"impact\": 2.5,\n         \"priorityManagement\": 9.6,\n         \"date\": \"2020-09-15T15:55:10.307Z\"\n     },\n     ...\n ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Parâmentros inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"URL params validation fail.\"\n}",
          "type": "json"
        },
        {
          "title": "Geopark Inválido - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Geopark does not exist.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "GetReportsFinalGeoparkClosedId_report",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/reports/final/geopark/:id_geopark",
    "title": "23.Listar todos relatórios de um geoparque",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador liste todas os relatórios finais realizados em um geoparque trazendo apenas as informações dos atributos.</p>",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Integer",
            "optional": false,
            "field": "id_geopark",
            "description": "<p>ID do geopark para especificar de qual os relatórios devem ser recuperados.</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id do relatório final do geoparque</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "demand",
            "description": "<p>Dados finais de demanda do geopark</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "management",
            "description": "<p>Dados finais de gerenciamento do geopark</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "zone",
            "description": "<p>Dados finais de zona do geopark</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "impact",
            "description": "<p>Dados finais de impacto do geopark</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "priorityManagement",
            "description": "<p>Prioridade de gerenciamento do geossítio, valor calculado a partir da equação da pesquisa</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Flag que representa se a pesquisa já foi concluída, em outras palavras, se é dinâmica ou fechada.</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Data na qual a pesquisa foi concluída.</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id_geopark",
            "description": "<p>Id do geopark da pesquisa</p>"
          }
        ],
        "201": [
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Data da criação do elemento</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n     {\n         \"id\": 1,\n         \"demand\": 1.7,\n         \"management\": 1.9,\n         \"zone\": 1.9,\n         \"impact\": 1.6,\n         \"priorityManagement\": 6.8,\n         \"status\": true,\n         \"date\": \"2019-09-15T16:02:22.669Z\",\n         \"created_at\": \"2019-09-15T15:54:12.880Z\",\n         \"id_geopark\": 1\n     }\n ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Parâmentros inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"URL params validation fail.\"\n}",
          "type": "json"
        },
        {
          "title": "Geopark Inválido - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Geopark does not exist.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "GetReportsFinalGeoparkId_geopark",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/reports/final/geopark/:id_geopark/dinamic",
    "title": "24.Lista o relatório dinâmico de um geoparque",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador liste os relatórios mais recentes de cada geossítio para gerar o relatório do dinâmico geoparque, em outras palavras, o relatório do ano daquele geoparque levando em consideração que ele ainda não foi fechado.</p>",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Integer",
            "optional": false,
            "field": "id_geopark",
            "description": "<p>ID do geopark para especificar de qual geoparque os relatórios dos devem ser recuperados.</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id do relatório do geossítio</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "geosite",
            "description": "<p>Nome do geossitio</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "demand",
            "description": "<p>Dados finais de demanda do geossítio de acordo com suas atrações</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "management",
            "description": "<p>Dados finais de gerenciamento do geossítio de acordo com suas atrações</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "zone",
            "description": "<p>Dados finais de zona do geossítio de acordo com suas atrações</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "impact",
            "description": "<p>Dados finais de impacto do geossítio de acordo com suas atrações</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "priorityManagement",
            "description": "<p>Prioridade de gerenciamento do geossítio, valor calculado a partir da equação da pesquisa</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Data na qual a pesquisa foi concluída.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n     {\n         \"id\": 1,\n         \"geosite\": \"Colina do Horto\",\n         \"demand\": 2.9,\n         \"management\": 1,\n         \"zone\": 1,\n         \"impact\": 1.1,\n         \"priorityManagement\": 4.1,\n         \"date\": \"2020-09-15T15:55:10.307Z\"\n     },\n     {\n         \"id\": 2,\n         \"geosite\": \"Cachoeira de Missão Velha\",\n         \"demand\": 1,\n         \"management\": 2,\n         \"zone\": 3,\n         \"impact\": 2.5,\n         \"priorityManagement\": 9.6,\n         \"date\": \"2020-09-15T15:55:10.307Z\"\n     },\n     ...\n ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Id de um relatório aberto - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"This report is not closed.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "GetReportsFinalGeoparkId_geoparkDinamic",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/reports/geopark/:id_geopark/geosites",
    "title": "26.Lista o todos os relatórios dos geossítios de um geoparque",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador liste os relatórios dos geossítios já feitos por meio de um id de um geopark.</p>",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Integer",
            "optional": false,
            "field": "id_geopark",
            "description": "<p>ID do geoparque para especificar de qual os relatórios dos geossítios devem ser recuperados.</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id do relatório do geossítio</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "geosite",
            "description": "<p>Nome do geossitio</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Endereço do geossítio contando com o nome da cidade e o Estado/Província/Região</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "researcher",
            "description": "<p>Nome do pesquisador responsável por realizar a pesquisa</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Data da criação do elemento</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Data na qual a pesquisa foi concluída.</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "demand",
            "description": "<p>Dados finais de demanda do geossítio de acordo com suas atrações</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "management",
            "description": "<p>Dados finais de gerenciamento do geossítio de acordo com suas atrações</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "zone",
            "description": "<p>Dados finais de zona do geossítio de acordo com suas atrações</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "impact",
            "description": "<p>Dados finais de impacto do geossítio de acordo com suas atrações</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "priorityManagement",
            "description": "<p>Prioridade de gerenciamento do geossítio, valor calculado a partir da equação da pesquisa</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n     {\n         \"id_geosite_report\": 1,\n         \"geosite\": \"Colina do Horto\",\n         \"address\": \"Cidade - Ceará\",\n         \"researcher\": \"Júlio Cavalcanti Fernandes\",\n         \"created_at\": \"2020-09-15T15:54:12.927Z\",\n         \"date\": \"2020-09-15T15:55:10.307Z\",\n         \"demand\": 2.9,\n         \"management\": 1,\n         \"zone\": 1,\n         \"impact\": 1.1,\n         \"priorityManagement\": 4.1\n     },\n     ...\n ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Parâmentros inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid params.\"\n}",
          "type": "json"
        },
        {
          "title": "Geopark Inválido - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Geopark does not exist.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "GetReportsGeoparkId_geoparkGeosites",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/reports/geosite/:id_geosite_report/attractions",
    "title": "27.Lista o todos os relatórios das atrações por meio do id de um relatório de geossítio",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador liste os relatórios das atrações de um geossítio, essas relatórios são buscado de acordo com o id do relatório geral do geossítio.</p>",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Integer",
            "optional": false,
            "field": "id_geosite_report",
            "description": "<p>ID de um relatório específico de um geossítio para especificar quais são os relatórios das atrações que o geraram.</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id do relatório da atração</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "attraction",
            "description": "<p>Nome da atração</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "demand",
            "description": "<p>Valor de demanda atribuído aquela atração naquela pesquisa</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "zone",
            "description": "<p>Valor de zona atribuído aquela atração naquela pesquisa</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "management",
            "description": "<p>Valor de gerenciamento atribuído aquela atração naquela pesquisa</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "impact",
            "description": "<p>Média dos valores atribuidos nos subtópicos de impactos atribuidos à atração naquela pesquisa</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Data na qual a pesquisa foi concluída.</p>"
          },
          {
            "group": "200",
            "type": "Double",
            "optional": false,
            "field": "priorityManagement",
            "description": "<p>Prioridade de gerenciamento da atração, valor calculado a partir da equação da pesquisa</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n     {\n         \"id\": 1,\n         \"attraction\": \"Chapel of the Holy Sepulcher\",\n         \"demand\": 3,\n         \"zone\": 1,\n         \"management\": 1,\n         \"impact\": 1,\n         \"date\": \"2020-09-15T15:55:09.395Z\",\n         \"priorityManagement\": 4\n     },\n     ...\n ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Parâmentros inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid params.\"\n}",
          "type": "json"
        },
        {
          "title": "Geosite Report Inválido - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Geosite report does not exist.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "GetReportsGeositeId_geosite_reportAttractions",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/solicitations",
    "title": "20.Listar solicitações",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador liste todas as solicitações de pesquisa.</p>",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id da solicitação</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Flag que representa se a solicitação está concluída ou não</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id_geosite",
            "description": "<p>Id do geossítio no qual será feita a pesquisa</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id_researcher",
            "description": "<p>Id do pesquisador responsável por realizar a pesquisa</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n     {\n         \"id\": 2,\n         \"status\": false,\n         \"id_geosite\": 2\n         \"id_researcher\": 3\n     }\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "GetSolicitations",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/users",
    "title": "02.Listar os usuários",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Lista todos os usuários da aplicação, menos o que estiver autenticado.</p>",
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>Atributo de uma query para páginação da usuários</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "avatar_url",
            "description": "<p>Endereço da imagem do usuário</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Nome único do arquivo do profile do usuário</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Data de criação do usuário</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>Objeto com o informações do tipo de usuário</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>Id do tipo do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>Descrição do tipo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"avatar_url\": \"http://localhost:3333/files/user_profile/anonymous.png\",\n        \"id\": 2,\n        \"name\": \"Amanda Martins Ferreira\",\n        \"email\": \"amandamartins@geopark.com.pt\",\n        \"avatar\": null,\n        \"created_at\": \"2020-04-28T22:53:49.830Z\",\n        \"user_type\": {\n            \"id\": 1,\n            \"type\": \"administrator\"\n        }\n    },\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "GetUsers",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/geoparks",
    "title": "08.Criar um geoparque",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador cadastre novos geoparques.</p>",
    "parameter": {
      "fields": {
        "Body - Multipart Form Data": [
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do geoparque</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>País do geoparque</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "File",
            "optional": false,
            "field": "avatar_geopark",
            "description": "<p>Campo da imagem do geoparque [*.jpg, *.jpeg, *.png]</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo de requisição:",
        "content": "name = \"Parque Geológico do Araripe\"\ncountry = \"Brasil\"\navatar_geopark = geopark.jpg",
        "type": "multpart/form"
      }
    ],
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id do Geopark</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do geoparque</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>País onde se localiza o geoparque</p>"
          },
          {
            "group": "201",
            "type": "Boolean",
            "optional": false,
            "field": "hidden",
            "description": "<p>Flag que representa se um geoparque foi excluído ou não</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Nome do arquivo da imagem do geoparque</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>Url da imagem do geoparque</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação do elemento</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da ultima atualização nesse objeto</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n {\n     \"image_url\": \"http://localhost:3333/files/user_profile/anonymous.png\",\n     \"id\": 1,\n     \"name\": \"Parque Geológico do Araripe\",\n     \"country\": \"Brasil\",\n     \"hidden\": false,\n     \"image\": null,\n     \"createdAt\": \"2020-04-28T22:53:51.138Z\",\n     \"updatedAt\": \"2020-04-28T22:53:51.138Z\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Campos inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid fields.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "PostGeoparks",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/geoparks/geosites/:id_geosite/attractions",
    "title": "17.Criar uma atração",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador cadastre novas atrações para um geossítio apartir do seu id.</p>",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Integer",
            "optional": false,
            "field": "id_geopark",
            "description": "<p>ID do geoparque no qual o novo geossítio pertencerá</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome da atração</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo de requisição:",
        "content": "{\n    \"name\": \"New Chapel of the Holy Sepulcher\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id da atração</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome da atração</p>"
          },
          {
            "group": "201",
            "type": "Boolean",
            "optional": false,
            "field": "hidden",
            "description": "<p>Flag que representa se uma atração foi excluído ou não</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação do elemento</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da ultima atualização nesse objeto</p>"
          },
          {
            "group": "201",
            "type": "Integer",
            "optional": false,
            "field": "id_geosite",
            "description": "<p>Id do geossítio no qual a atração pertence.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n {\n     \"id\": 39,\n     \"name\": \"New Chapel of the Holy Sepulcher\",\n     \"hidden\": false,\n     \"createdAt\": \"2020-04-28T22:53:51.169Z\",\n     \"updatedAt\": \"2020-04-28T22:53:51.169Z\",\n     \"id_geopark\": 1\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Campos inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Req body validation fail.\"\n}",
          "type": "json"
        },
        {
          "title": "Parâmentros inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"URL params validation fail.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "PostGeoparksGeositesId_geositeAttractions",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/geoparks/:id_geopark/geosites",
    "title": "13.Criar um geossítio",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador cadastre novos geossítios.</p>",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Integer",
            "optional": false,
            "field": "id_geopark",
            "description": "<p>ID do geoparque no qual o novo geossítio pertencerá</p>"
          }
        ],
        "Body - Multipart Form Data": [
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do geossítio</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Endereço da localização do geossítio</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "File",
            "optional": false,
            "field": "avatar_geosite",
            "description": "<p>Campo da imagem do geossítio [*.jpg, *.jpeg, *.png]</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo de requisição:",
        "content": "name = \"Colina do Horto\"\naddress = \"Juazeiro do Norte - Ceará\"\navatar_geosite = geosite.jpg",
        "type": "multpart/form"
      }
    ],
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id do Geossítio</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do geossítio</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Localização do geossitio</p>"
          },
          {
            "group": "201",
            "type": "Boolean",
            "optional": false,
            "field": "hidden",
            "description": "<p>Flag que representa se um geossítio foi excluído ou não</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Nome do arquivo da imagem do geossítio</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>Url da imagem do geossítio</p>"
          },
          {
            "group": "201",
            "type": "Integer",
            "optional": false,
            "field": "id_geopark",
            "description": "<p>Id do geopark no qual o geossítio pertence</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação do elemento</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da ultima atualização nesse objeto</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n {\n     \"image_url\": \"http://localhost:3333/files/user_profile/bc233ff18910de4836b6ad3b5d11bc71.jpeg\",\n     \"id\": 1,\n     \"name\": \"Colina do Horto\",\n     \"address\": \"Juazeiro do Norte - Ceará\",\n     \"id_geopark\": 1,\n     \"image\": \"bc233ff18910de4836b6ad3b5d11bc71.jpeg\",\n     \"updatedAt\": \"2020-06-03T19:11:39.549Z\",\n     \"createdAt\": \"2020-06-03T19:11:39.549Z\",\n     \"hidden\": false\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Campos inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid fields.\"\n}",
          "type": "json"
        },
        {
          "title": "Parâmentros inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid params.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "PostGeoparksId_geoparkGeosites",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/solicitations",
    "title": "21.Criar uma solicitação",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador crie uma nova solicitação passando o id do geossítio à ser pesquisado e o id do pesquisador responsável por realizar. Essa rota também é responsável por criar relatórios anuais de geossítio, fechar e atualizar, os em abertos, de acordo, com a data em que essa solicitação está sendo criada.</p>",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "Integer",
            "optional": false,
            "field": "id_researcher",
            "description": "<p>Id do pesquisador responsável por efetuar a pesquisa</p>"
          },
          {
            "group": "Body",
            "type": "Integer",
            "optional": false,
            "field": "id_geosite",
            "description": "<p>Id do geossítio em será realizada a pesquisa</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo de requisição:",
        "content": "{\n  \"id_researcher\": 7,\n  \"id_geosite\": 4\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id da solicitação</p>"
          },
          {
            "group": "201",
            "type": "Integer",
            "optional": false,
            "field": "id_geosite",
            "description": "<p>Id do geossítio no qual será feita a pesquisa</p>"
          },
          {
            "group": "201",
            "type": "Integer",
            "optional": false,
            "field": "id_researcher",
            "description": "<p>Id do pesquisador responsável por realizar a pesquisa</p>"
          },
          {
            "group": "201",
            "type": "Integer",
            "optional": false,
            "field": "id_adm",
            "description": "<p>Id do administrador que gerou essa solicitação</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação do elemento</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da ultima atualização nesse objeto</p>"
          },
          {
            "group": "201",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Flag que representa se a solicitação está concluída ou não</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Data na qual a solicitação foi concluída.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n {\n     \"id\": 6,\n     \"id_researcher\": 7,\n     \"id_geosite\": 5,\n     \"id_adm\": 1,\n     \"updatedAt\": \"2020-09-14T19:33:56.453Z\",\n     \"createdAt\": \"2020-09-14T19:33:56.453Z\",\n     \"status\": false,\n     \"date\": null\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Campos inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Validation failed.\"\n}",
          "type": "json"
        },
        {
          "title": "Criação de uma solicitação de um geossítio que já tem uma aberta - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Already exists a solicitation open.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "PostSolicitations",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/users",
    "title": "03.Criar um usuário",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador cadastre novos usuários.</p>",
    "parameter": {
      "fields": {
        "Body - Multipart Form Data": [
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do usuário</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "Char",
            "optional": false,
            "field": "genre",
            "description": "<p>Caracter representante do gênero do usuário</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "Integer",
            "optional": false,
            "field": "id_type",
            "description": "<p>Id representante do tipo do usuário</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "File",
            "optional": false,
            "field": "avatar",
            "description": "<p>Campo da imagem do usuário [*.jpg, *.jpeg, *.png]</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo de requisição:",
        "content": "name = \"Jonh Doe\"\nemail = \"jonhdoe@email.com\"\ngenre = \"M\"\nid_type = 2\navatar = profile.jpg",
        "type": "multpart/form"
      }
    ],
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Intger",
            "optional": false,
            "field": "id",
            "description": "<p>id do usuário</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do usuário</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário</p>"
          },
          {
            "group": "201",
            "type": "Char",
            "optional": false,
            "field": "genre",
            "description": "<p>Caracter representante do gênero do usuário</p>"
          },
          {
            "group": "201",
            "type": "Integer",
            "optional": false,
            "field": "id_type",
            "description": "<p>Id representante do tipo do usuário</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Nome do arquivo da imagem do usuário</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "avatar_url",
            "description": "<p>Url da imagem do usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n    \"id\": 59,\n    \"name\": \"Ariel Sales\",\n    \"email\": \"ariel@aluno.fapce.edu.br\",\n    \"genre\": \"M\",\n    \"id_type\": 2,\n    \"avatar\": null,\n    \"avatar_url\": \"http://localhost:3333/files/user_profile/anonymous.png\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Campos inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid fields.\"\n}",
          "type": "json"
        },
        {
          "title": "Email duplicado - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Email in Use.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "PostUsers",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/websessions",
    "title": "01.Login/Web",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Rota de autenticação para aplicação web.</p>",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha do usuário</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo de requisição:",
        "content": "{\n    \"email\": \"jonhdoe@email.com\",\n    \"password\": \"yourpassword\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Objeto contendo informações do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>Email do usuário autenticado</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": "<p>Nome do usuário autenticado</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "user.user_type",
            "description": "<p>Objeto contendo informações sobre o nível de permissão</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "user.user_type.id",
            "description": "<p>Indentificador do tipo de permissão</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "user.user_type.type",
            "description": "<p>Tipo do nível de permissão</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"user\": {\n        \"email\": \"jonh@email.com\",\n        \"name\": \"Jonh Doe\",\n        \"user_type\": {\n            \"id\": 1,\n            \"type\": \"administrator\"\n        }\n    }\n    \"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Campos inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid fields.\"\n}",
          "type": "json"
        },
        {
          "title": "Email, senha ou permissão inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Email or password invalid.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "PostWebsessions"
  },
  {
    "type": "put",
    "url": "/geoparks/geosites/attractions/:id",
    "title": "18.Atualizar uma atração",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador atualize os dados de uma atração.</p>",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID da atração para a atualização</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Novo nome da atração</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo de requisição:",
        "content": "{\n    \"name\": \"Old Chapel of the Holy Sepulcher\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id da atração</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome da atração</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "hidden",
            "description": "<p>Flag que representa se uma atração foi excluído ou não</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação do elemento</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da ultima atualização nesse objeto</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id_geosite",
            "description": "<p>Id do geossítio no qual a atração pertence.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"id\": 39,\n     \"name\": \"Old Chapel of the Holy Sepulcher\",\n     \"hidden\": false,\n     \"createdAt\": \"2020-04-28T22:53:51.169Z\",\n     \"updatedAt\": \"2020-04-28T22:53:51.169Z\",\n     \"id_geopark\": 1\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Campos inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid fields.\"\n}",
          "type": "json"
        },
        {
          "title": "Parâmentros inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"URL params validation fail.\"\n}",
          "type": "json"
        },
        {
          "title": "Atração Inválido - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Attraction does not exist.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "PutGeoparksGeositesAttractionsId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/geoparks/geosites/:id",
    "title": "14.Atualizar um geossítio",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador atualize os dados do geossítio.</p>",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID do geossítio para a atualização</p>"
          }
        ],
        "Body - Multipart Form Data": [
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do geossítio</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Endereço da localização do geossítio</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "File",
            "optional": false,
            "field": "avatar_geosite",
            "description": "<p>Campo da imagem do geossítio [*.jpg, *.jpeg, *.png]</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo de requisição:",
        "content": "name = \"Colina do Horto\"\naddress = \"Juazeiro do Norte - Ceará\"\navatar_geosite = geosite.jpg",
        "type": "multpart/form"
      }
    ],
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id do Geossítio</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do geossítio</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Localização do geossitio</p>"
          },
          {
            "group": "201",
            "type": "Boolean",
            "optional": false,
            "field": "hidden",
            "description": "<p>Flag que representa se um geossítio foi excluído ou não</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Nome do arquivo da imagem do geossítio</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>Url da imagem do geossítio</p>"
          },
          {
            "group": "201",
            "type": "Integer",
            "optional": false,
            "field": "id_geopark",
            "description": "<p>Id do geopark no qual o geossítio pertence</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação do elemento</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da ultima atualização nesse objeto</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n {\n     \"image_url\": \"http://localhost:3333/files/user_profile/bc233ff18910de4836b6ad3b5d11bc71.jpeg\",\n     \"id\": 1,\n     \"name\": \"Colina do Horto\",\n     \"address\": \"Juazeiro do Norte - Ceará\",\n     \"id_geopark\": 1,\n     \"image\": \"bc233ff18910de4836b6ad3b5d11bc71.jpeg\",\n     \"updatedAt\": \"2020-06-03T19:11:39.549Z\",\n     \"createdAt\": \"2020-06-03T19:11:39.549Z\",\n     \"hidden\": false\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Campos inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid fields.\"\n}",
          "type": "json"
        },
        {
          "title": "Parâmentros inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid params.\"\n}",
          "type": "json"
        },
        {
          "title": "Geossítio Inválido - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Geosite does not exist.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "PutGeoparksGeositesId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/geoparks/:id",
    "title": "09.Atualizar um geoparque",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador atualize os dados de um geoparque a partir de um id.</p>",
    "parameter": {
      "fields": {
        "Param": [
          {
            "group": "Param",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id do geoparque no qual deseja atualizar seus dados</p>"
          }
        ],
        "Body - Multipart Form Data": [
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do geoparque</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>País do geoparque</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "File",
            "optional": false,
            "field": "avatar_geopark",
            "description": "<p>Campo da imagem do geoparque [*.jpg, *.jpeg, *.png]</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo de requisição:",
        "content": "name = \"Parque Geológico do Araripe\"\ncountry = \"Brasil\"\navatar_geopark = geopark.jpg",
        "type": "multpart/form"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id do Geopark</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do geoparque</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>País onde se localiza o geoparque</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "hidden",
            "description": "<p>Flag que representa se um geoparque foi excluído ou não</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Nome do arquivo da imagem do geoparque</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>Url da imagem do geoparque</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id_type",
            "description": "<p>Id representante do tipo do usuário</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação do elemento</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da ultima atualização nesse objeto</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"image_url\": \"http://localhost:3333/files/user_profile/anonymous.png\",\n     \"id\": 1,\n     \"name\": \"Parque Geológico do Araripe\",\n     \"country\": \"Brasil\",\n     \"hidden\": false,\n     \"image\": null,\n     \"createdAt\": \"2020-04-28T22:53:51.138Z\",\n     \"updatedAt\": \"2020-04-28T22:53:51.138Z\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Campos inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid fields.\"\n}",
          "type": "json"
        },
        {
          "title": "Parâmentros inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid params.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "PutGeoparksId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/solicitations/:id",
    "title": "22.Atualizar uma solicitação",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador atualize o pesquisador responsável da solicitação.</p>",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID da solicitação para a atualização</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "Integer",
            "optional": false,
            "field": "id_researcher",
            "description": "<p>Id do novo pesquisador</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo de requisição:",
        "content": "{\n    \"id_researcher\": 7\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id da solicitação</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id_geosite",
            "description": "<p>Id do geossítio no qual será feita a pesquisa</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id_researcher",
            "description": "<p>Id do pesquisador responsável por realizar a pesquisa</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id_adm",
            "description": "<p>Id do administrador que gerou essa solicitação</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data da criação do elemento</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da ultima atualização nesse objeto</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Flag que representa se a solicitação está concluída ou não</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Data na qual a solicitação foi concluída.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n {\n     \"id\": 6,\n     \"id_researcher\": 7,\n     \"id_geosite\": 5,\n     \"id_adm\": 1,\n     \"updatedAt\": \"2020-09-14T19:33:56.453Z\",\n     \"createdAt\": \"2020-09-14T19:33:56.453Z\",\n     \"status\": false,\n     \"date\": null\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Campos inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid body Validation.\"\n}",
          "type": "json"
        },
        {
          "title": "Parâmentros inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid params Validation.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "PutSolicitationsId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/users/administrator",
    "title": "05.Atualizar Administrador Logado",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador atualize seus dados pessoais na aplicação.</p>",
    "parameter": {
      "fields": {
        "Body - Multipart Form Data": [
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do usuário.</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário.</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "Char",
            "optional": false,
            "field": "genre",
            "description": "<p>Caracter representante do gênero do usuário.</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>Caso usuário queira alterar a senha ele deve passar sua senha antiga.</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Nova senha desejada.</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "confirmPassword",
            "description": "<p>Confirmação da senha para evitar erros de digitação.</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "File",
            "optional": false,
            "field": "avatar",
            "description": "<p>Campo da imagem do usuário [*.jpg, *.jpeg, *.png]</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo de requisição:",
        "content": "name = \"Jonh Doe\"\nemail = \"jonhdoe@email.com\"\ngenre = \"M\"\noldPassword = \"elderpassword\"\npassword = \"password123456789\"\nconfirmPassword = \"password123456789\"\navatar = profile.jpg",
        "type": "multpart/form"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário</p>"
          },
          {
            "group": "200",
            "type": "Char",
            "optional": false,
            "field": "genre",
            "description": "<p>Caracter representante do gênero do usuário</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id_type",
            "description": "<p>Id representante do tipo do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Nome do arquivo da imagem do usuário</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "avatar_url",
            "description": "<p>Url da imagem do usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"name\": \"Jonh Doe\",\n    \"email\": \"jonhdoe@email.com\",\n    \"genre\": \"M\",\n    \"id_type\": 2,\n    \"avatar\": null,\n    \"avatar_url\": \"http://localhost:3333/files/user_profile/anonymous.png\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Campos inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid fields.\"\n}",
          "type": "json"
        },
        {
          "title": "Email duplicado - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Email in Use.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "PutUsersAdministrator",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "04.Atualizar usuários",
    "version": "1.0.0",
    "group": "Web",
    "description": "<p>Permite que o usuário administrador atualize dados de outros usuários, desde que sejam apenas pesquisadores, a partir do id referente ao usuário.</p>",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "optional": false,
            "field": "id",
            "description": "<p>ID do usuário no qual se deseja atualizar seus dados</p>"
          }
        ],
        "Body - Multipart Form Data": [
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do usuário</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "Char",
            "optional": false,
            "field": "genre",
            "description": "<p>Caracter representante do gênero do usuário</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "Integer",
            "optional": false,
            "field": "id_type",
            "description": "<p>Id representante do tipo do usuário</p>"
          },
          {
            "group": "Body - Multipart Form Data",
            "type": "File",
            "optional": false,
            "field": "avatar",
            "description": "<p>Campo da imagem do usuário [*.jpg, *.jpeg, *.png]</p>"
          }
        ],
        "Nível de Acesso": [
          {
            "group": "Nível de Acesso",
            "type": "Object",
            "optional": false,
            "field": "user_type",
            "description": "<p>O nível de permissão que o usuário precisa para ter acesso as informações dessa rota</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "Integer",
            "optional": false,
            "field": "user_type.id",
            "description": "<p>1</p>"
          },
          {
            "group": "Nível de Acesso",
            "type": "String",
            "optional": false,
            "field": "user_type.type",
            "description": "<p>&quot;Administrator&quot;</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo de requisição:",
        "content": "name = \"Jonh Doe\"\nemail = \"jonhdoe@email.com\"\ngenre = \"M\"\nid_type = 2\navatar = profile.jpg",
        "type": "multpart/form"
      }
    ],
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Intger",
            "optional": false,
            "field": "id",
            "description": "<p>id do usuário</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do usuário</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário</p>"
          },
          {
            "group": "201",
            "type": "Char",
            "optional": false,
            "field": "genre",
            "description": "<p>Caracter representante do gênero do usuário</p>"
          },
          {
            "group": "201",
            "type": "Integer",
            "optional": false,
            "field": "id_type",
            "description": "<p>Id representante do tipo do usuário</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Nome do arquivo da imagem do usuário</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "avatar_url",
            "description": "<p>Url da imagem do usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 59,\n    \"name\": \"Ariel Sales\",\n    \"email\": \"ariel@aluno.fapce.edu.br\",\n    \"genre\": \"M\",\n    \"id_type\": 2,\n    \"avatar\": null,\n    \"avatar_url\": \"http://localhost:3333/files/user_profile/anonymous.png\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Campos inválidos - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Invalid fields.\"\n}",
          "type": "json"
        },
        {
          "title": "Email duplicado - Error-Response:",
          "content": "HTTP/1.1 400 Error\n{\n    \"error\": \"Email in Use.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/version_1_0_0/web.js",
    "groupTitle": "Web",
    "name": "PutUsersId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token necessário para a realização de autenticação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header:",
          "content": "{\n  \"authorization\": \"Bearer [token]\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
