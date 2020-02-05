#!/usr/bin/env bash

# USAGE:
#   $1 <PROTO_PATH>     path to the .proto file
#   $2 <BUILD_PATH>     path into which to build the .proto files

PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
PROTOC_GEN_GRPC_PATH="./node_modules/.bin/grpc_tools_node_protoc_plugin"
PROTO_PATH=$1
BUILD_PATH=$2

echo "Building $PROTO_PATH into $BUILD_PATH"
rm -rf $BUILD_PATH
mkdir -p $BUILD_PATH

protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --plugin=protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH} \
    --js_out="import_style=commonjs,binary:$BUILD_PATH" \
    --ts_out="service=grpc-node:$BUILD_PATH" \
    --grpc_out="$BUILD_PATH" \
    $PROTO_PATH

echo "Done!"
