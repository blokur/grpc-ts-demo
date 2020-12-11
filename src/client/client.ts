import * as grpc from '@grpc/grpc-js';
import * as songsGrpcPb from '../proto/songs_grpc_pb';

const SongsServiceClient = grpc.makeClientConstructor(
    songsGrpcPb["songs.Songs"],
    "SongsService",
);
export default new SongsServiceClient(
    `localhost:${process.env.PORT}`,
    grpc.credentials.createInsecure(),
);
