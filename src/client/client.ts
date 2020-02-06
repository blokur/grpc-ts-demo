import grpc from 'grpc';
import services from '../proto/songs_grpc_pb';

export default new services.SongsClient(`localhost:${process.env.PORT}`, grpc.credentials.createInsecure());
