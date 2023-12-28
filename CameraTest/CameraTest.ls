{
  "_$ver": 1,
  "_$id": "qrv0dmrc",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "_$child": [
    {
      "_$id": "n9gjxcltvl",
      "_$type": "Scene3D",
      "name": "Scene3D",
      "skyRenderer": {
        "meshType": "dome",
        "material": {
          "_$uuid": "793cffc6-730a-4756-a658-efe98c230292",
          "_$type": "Material"
        }
      },
      "ambientMode": 0,
      "ambientColor": {
        "_$type": "Color",
        "r": 0.424308,
        "g": 0.4578516,
        "b": 0.5294118
      },
      "fogStart": 0,
      "fogEnd": 300,
      "fogDensity": 0.01,
      "fogColor": {
        "_$type": "Color",
        "r": 0.5,
        "g": 0.5,
        "b": 0.5
      },
      "lightmaps": [],
      "_$comp": [
        {
          "_$type": "5346dcf5-7e8a-46dd-b5ba-3e877b7e24ac",
          "scriptPath": "../src/Camera/CameraCore.ts",
          "mainCamera": {
            "_$ref": "6jx8h8bvc6"
          },
          "backgroundCam": null,
          "target": {
            "_$ref": "dpweimp0"
          },
          "lagTime": 2,
          "offset": {
            "_$type": "Vector3",
            "y": 1,
            "z": 5
          },
          "rot": {
            "_$type": "Vector3",
            "x": -10
          },
          "onAirFOV": null,
          "normalFOV": null
        }
      ],
      "_$child": [
        {
          "_$id": "6jx8h8bvc6",
          "_$type": "Camera",
          "name": "Main Camera",
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "y": 3,
              "z": 5
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": -0.08719371683392844,
              "y": 0.03366970918846578,
              "z": 0.0003591505059248167,
              "w": 0.995622155960163
            }
          },
          "orthographicVerticalSize": 10,
          "fieldOfView": 60,
          "nearPlane": 0.3,
          "farPlane": 1000,
          "clearFlag": 1,
          "clearColor": {
            "_$type": "Color",
            "r": 0.3921,
            "g": 0.5843,
            "b": 0.9294
          },
          "cullingMask": 2147483647,
          "normalizedViewport": {
            "_$type": "Viewport",
            "width": 1,
            "height": 1
          },
          "depthTextureFormat": 35
        },
        {
          "_$id": "6ni3p096l5",
          "_$type": "Sprite3D",
          "name": "Direction Light",
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 5,
              "y": 5,
              "z": 5
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": -0.40821789367673483,
              "y": 0.23456971600980447,
              "z": 0.109381654946615,
              "w": 0.875426098065593
            }
          },
          "_$comp": [
            {
              "_$type": "DirectionLightCom",
              "color": {
                "_$type": "Color",
                "r": 0.6,
                "g": 0.6,
                "b": 0.6
              },
              "intensity": 1,
              "lightmapBakedType": 1,
              "shadowMode": 0,
              "shadowStrength": 1,
              "shadowDistance": 50,
              "shadowDepthBias": 1,
              "shadowNormalBias": 1,
              "shadowNearPlane": 0.1,
              "shadowCascadesMode": 0,
              "strength": null,
              "angle": null,
              "maxBounces": null
            }
          ]
        },
        {
          "_$id": "dpweimp0",
          "_$type": "Sprite3D",
          "name": "Target",
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "y": 1,
              "z": -0.6100997924804688
            }
          },
          "_$comp": [
            {
              "_$type": "MeshFilter",
              "sharedMesh": {
                "_$uuid": "81a027ba-bf6c-4112-8e81-2a9b06c53290",
                "_$type": "Mesh"
              }
            },
            {
              "_$type": "MeshRenderer",
              "sharedMaterials": [
                {
                  "_$uuid": "6f90bbb0-bcb2-4311-8a9d-3d8277522098",
                  "_$type": "Material"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "_$id": "gw3jdh2o",
      "_$type": "Box",
      "name": "FOV",
      "y": 26,
      "width": 200,
      "height": 100,
      "mouseEnabled": true,
      "_$comp": [
        {
          "_$type": "ddb30c17-ead6-4b95-8b49-2db225fdf130",
          "scriptPath": "Test/csl/FOVTest.ts",
          "model": [
            {
              "_$type": "6234416f-165f-4dd5-b777-ad5612ae969f",
              "offset": 30,
              "duration": 3,
              "easeType": "linearNone"
            }
          ],
          "setBtn": {
            "_$ref": "xln72ip6"
          }
        }
      ],
      "_$child": [
        {
          "_$id": "xln72ip6",
          "_$var": true,
          "_$type": "Button",
          "name": "Button",
          "width": 200,
          "height": 100,
          "mouseEnabled": true,
          "left": 0,
          "top": 0,
          "skin": "res://d4cfd6a8-0d0a-475b-ac93-d85eaa646936",
          "label": "FOV",
          "labelSize": 90,
          "labelBold": true,
          "labelVAlign": "middle"
        }
      ]
    },
    {
      "_$id": "hrnb7kx8",
      "_$type": "Box",
      "name": "Move",
      "x": 248,
      "y": 26,
      "width": 200,
      "height": 400,
      "mouseEnabled": true,
      "_$comp": [
        {
          "_$type": "7873a92a-eeb3-4b79-8913-15852b1b2761",
          "scriptPath": "Test/csl/MoveTest.ts",
          "model": [
            {
              "_$type": "5da007f4-8dca-48c2-bb7a-22502f1a175a",
              "offset": {
                "_$type": "Vector3",
                "x": -2
              },
              "duration": 1,
              "easeType": "linearNone"
            },
            {
              "_$type": "5da007f4-8dca-48c2-bb7a-22502f1a175a",
              "offset": {
                "_$type": "Vector3",
                "y": 2
              },
              "duration": 1,
              "easeType": "linearNone"
            },
            {
              "_$type": "5da007f4-8dca-48c2-bb7a-22502f1a175a",
              "offset": {
                "_$type": "Vector3",
                "x": 4
              },
              "duration": 2,
              "easeType": "linearNone"
            },
            {
              "_$type": "5da007f4-8dca-48c2-bb7a-22502f1a175a",
              "offset": {
                "_$type": "Vector3",
                "y": -2
              },
              "duration": 1,
              "easeType": "linearNone"
            },
            {
              "_$type": "5da007f4-8dca-48c2-bb7a-22502f1a175a",
              "offset": {
                "_$type": "Vector3",
                "x": -2
              },
              "duration": 1,
              "easeType": "linearNone"
            }
          ],
          "setBtn": {
            "_$ref": "sc86fuls"
          },
          "resetBtn": {
            "_$ref": "o5fvvqg4"
          }
        }
      ],
      "_$child": [
        {
          "_$id": "sc86fuls",
          "_$var": true,
          "_$type": "Button",
          "name": "Button",
          "width": 200,
          "height": 100,
          "mouseEnabled": true,
          "left": 0,
          "top": 0,
          "skin": "res://d4cfd6a8-0d0a-475b-ac93-d85eaa646936",
          "label": "Move",
          "labelSize": 70,
          "labelBold": true,
          "labelVAlign": "middle"
        },
        {
          "_$id": "o5fvvqg4",
          "_$var": true,
          "_$type": "Button",
          "name": "Button(1)",
          "y": 110,
          "width": 200,
          "height": 100,
          "mouseEnabled": true,
          "left": 0,
          "top": 110,
          "skin": "res://d4cfd6a8-0d0a-475b-ac93-d85eaa646936",
          "label": "Reset",
          "labelSize": 70,
          "labelBold": true,
          "labelVAlign": "middle"
        }
      ]
    },
    {
      "_$id": "nghw0xqg",
      "_$type": "Box",
      "name": "Rotate",
      "x": 602,
      "y": 22,
      "width": 200,
      "height": 400,
      "mouseEnabled": true,
      "_$comp": [
        {
          "_$type": "bfeec9ea-f8e9-439d-a056-f4d13d19fa6c",
          "scriptPath": "Test/csl/RotateTest.ts",
          "model": [
            {
              "_$type": "97023ff9-f1fc-446b-ac91-7f60a8cdf8b2",
              "offset": {
                "_$type": "Vector3",
                "x": -10
              },
              "duration": 1,
              "easeType": "linearNone"
            },
            {
              "_$type": "97023ff9-f1fc-446b-ac91-7f60a8cdf8b2",
              "offset": {
                "_$type": "Vector3",
                "x": 10
              },
              "duration": 1,
              "easeType": "linearNone"
            },
            {
              "_$type": "97023ff9-f1fc-446b-ac91-7f60a8cdf8b2",
              "offset": {
                "_$type": "Vector3",
                "y": 10
              },
              "duration": 1,
              "easeType": "linearNone"
            },
            {
              "_$type": "97023ff9-f1fc-446b-ac91-7f60a8cdf8b2",
              "offset": {
                "_$type": "Vector3",
                "y": -10
              },
              "duration": 1,
              "easeType": "linearNone"
            },
            {
              "_$type": "97023ff9-f1fc-446b-ac91-7f60a8cdf8b2",
              "offset": {
                "_$type": "Vector3",
                "z": 10
              },
              "duration": 1,
              "easeType": "linearNone"
            },
            {
              "_$type": "97023ff9-f1fc-446b-ac91-7f60a8cdf8b2",
              "offset": {
                "_$type": "Vector3",
                "z": -10
              },
              "duration": 1,
              "easeType": "linearNone"
            }
          ],
          "setBtn": {
            "_$ref": "vuv94shk"
          },
          "resetBtn": {
            "_$ref": "3vks6qwg"
          }
        }
      ],
      "_$child": [
        {
          "_$id": "vuv94shk",
          "_$var": true,
          "_$type": "Button",
          "name": "Button",
          "width": 200,
          "height": 100,
          "mouseEnabled": true,
          "left": 0,
          "top": 0,
          "skin": "res://d4cfd6a8-0d0a-475b-ac93-d85eaa646936",
          "label": "Rotate",
          "labelSize": 65,
          "labelBold": true,
          "labelVAlign": "middle"
        },
        {
          "_$id": "3vks6qwg",
          "_$var": true,
          "_$type": "Button",
          "name": "Button(1)",
          "y": 110,
          "width": 200,
          "height": 100,
          "mouseEnabled": true,
          "left": 0,
          "top": 110,
          "skin": "res://d4cfd6a8-0d0a-475b-ac93-d85eaa646936",
          "label": "Reset",
          "labelSize": 70,
          "labelBold": true,
          "labelVAlign": "middle"
        }
      ]
    },
    {
      "_$id": "3cynbec4",
      "_$type": "Box",
      "name": "Complex",
      "x": 952,
      "y": 22,
      "width": 200,
      "height": 400,
      "mouseEnabled": true,
      "_$comp": [
        {
          "_$type": "ab759204-e27a-43ae-9388-e47b3d824fe7",
          "scriptPath": "Test/csl/ComplexTest.ts",
          "fovTest": {
            "_$ref": "gw3jdh2o",
            "_$type": "ddb30c17-ead6-4b95-8b49-2db225fdf130"
          },
          "moveTest": {
            "_$ref": "hrnb7kx8",
            "_$type": "7873a92a-eeb3-4b79-8913-15852b1b2761"
          },
          "rotateTest": {
            "_$ref": "nghw0xqg",
            "_$type": "bfeec9ea-f8e9-439d-a056-f4d13d19fa6c"
          },
          "setBtn": {
            "_$ref": "sf11i4wi"
          },
          "resetBtn": {
            "_$ref": "74e5ha8l"
          }
        }
      ],
      "_$child": [
        {
          "_$id": "sf11i4wi",
          "_$var": true,
          "_$type": "Button",
          "name": "Button",
          "width": 200,
          "height": 100,
          "mouseEnabled": true,
          "left": 0,
          "top": 0,
          "skin": "res://d4cfd6a8-0d0a-475b-ac93-d85eaa646936",
          "label": "混合测试",
          "labelSize": 50,
          "labelBold": true,
          "labelVAlign": "middle"
        },
        {
          "_$id": "74e5ha8l",
          "_$var": true,
          "_$type": "Button",
          "name": "Button(1)",
          "y": 110,
          "width": 200,
          "height": 100,
          "mouseEnabled": true,
          "left": 0,
          "top": 110,
          "skin": "res://d4cfd6a8-0d0a-475b-ac93-d85eaa646936",
          "label": "Reset",
          "labelSize": 70,
          "labelBold": true,
          "labelVAlign": "middle"
        }
      ]
    }
  ]
}