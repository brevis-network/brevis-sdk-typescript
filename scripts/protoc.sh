protoc -I ./brevis-proto \
    --ts_out=./proto \
    --ts_opt=target=node \
    --ts_opt=unary_rpc_promise=true \
    --ts_opt=no_namespace \
    ./brevis-proto/sdk/*.proto \
    ./brevis-proto/common/*.proto \
    ./brevis-proto/brevis/gateway.proto \
    ./brevis-proto/brevis/types.proto
