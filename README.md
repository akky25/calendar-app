# カレンダーの環境構築

## セットアップ

docker をインストールしたのちに、

```shell
$ cd ./front && yarn
$ npm --prefix ./server install ./server
$ cp ./server/env/env-local ./server/.env
```


## サーバーの起動と停止

```shell
$ docker-compose up -d
```

を実行すると[localhost:8080]()にサーバーが立ち上がります。

サーバーを止めたいときは、

```shell
$ docker-compose down
```

API ドキュメントは[こちら](./server/README.md)

## フロントの開発をするとき

フロントは`webpack`でビルドしてやる必要があります。

```shell
$ cd ./front && yarn start
```
