# Examples

## Create keys
### openssl
```code
openssl genrsa -out private.pem 512
openssl rsa -in private.pem -outform PEM -pubout -out public.pem
```
### node-rsa
```code
node createkeys.js
```

## Using
### Node-rsa -> openssl

```code
node encrypt.js | openssl base64 -d -A | openssl rsautl -decrypt -oaep -inkey private.pem
```
### Openssl -> Node-rsa

```code
echo 'Hello RSA!' | openssl rsautl -encrypt -oaep -pubin -inkey public.pem | openssl base64 -A | node decrypt.js
```

### Openssl -> openssl
```code
echo 'Hello RSA!' | openssl rsautl -encrypt -oaep -pubin -inkey public.pem| openssl rsautl -decrypt -oaep -inkey private.pem
```

### Node-rsa -> Node-rsa
```code
node encrypt.js | node decrypt.js
```
