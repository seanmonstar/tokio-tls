var searchIndex = {};
searchIndex["tokio_tls"] = {"doc":"Async TLS streams","items":[[3,"TlsStream","tokio_tls","A wrapper around an underlying raw stream which implements the TLS or SSL protocol.",null,null],[3,"ConnectAsync","","Future returned from `TlsConnectorExt::connect_async` which will resolve once the connection handshake has finished.",null,null],[3,"AcceptAsync","","Future returned from `TlsAcceptorExt::accept_async` which will resolve once the accept handshake has finished.",null,null],[0,"proto","","Wrappers for `tokio-proto`",null,null],[3,"Server","tokio_tls::proto","TLS server protocol wrapper.",null,null],[3,"ServerPipelineBind","","Future returned from `bind_transport` in the `ServerProto` implementation.",null,null],[3,"ServerMultiplexBind","","Future returned from `bind_transport` in the `ServerProto` implementation.",null,null],[3,"ServerStreamingPipelineBind","","Future returned from `bind_transport` in the `ServerProto` implementation.",null,null],[3,"ServerStreamingMultiplexBind","","Future returned from `bind_transport` in the `ServerProto` implementation.",null,null],[3,"Client","","TLS client protocol wrapper.",null,null],[3,"ClientPipelineBind","","Future returned from `bind_transport` in the `ClientProto` implementation.",null,null],[3,"ClientMultiplexBind","","Future returned from `bind_transport` in the `ClientProto` implementation.",null,null],[3,"ClientStreamingPipelineBind","","Future returned from `bind_transport` in the `ClientProto` implementation.",null,null],[3,"ClientStreamingMultiplexBind","","Future returned from `bind_transport` in the `ClientProto` implementation.",null,null],[11,"new","","Constructs a new TLS protocol which will delegate to the underlying `protocol` specified.",0,{"inputs":[{"name":"t"},{"name":"tlsacceptor"}],"output":{"name":"server"}}],[11,"bind_transport","","",0,null],[11,"poll","","",1,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"bind_transport","","",0,null],[11,"poll","","",2,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"bind_transport","","",0,null],[11,"poll","","",3,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"bind_transport","","",0,null],[11,"poll","","",4,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"new","","Constructs a new TLS protocol which will delegate to the underlying `protocol` specified.",5,{"inputs":[{"name":"t"},{"name":"tlsconnector"},{"name":"str"}],"output":{"name":"client"}}],[11,"bind_transport","","",5,null],[11,"poll","","",6,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"bind_transport","","",5,null],[11,"poll","","",7,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"bind_transport","","",5,null],[11,"poll","","",8,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"bind_transport","","",5,null],[11,"poll","","",9,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[8,"TlsConnectorExt","tokio_tls","Extension trait for the `TlsConnector` type in the `native_tls` crate.",null,null],[10,"connect_async","","Connects the provided stream with this connector, assuming the provided domain.",10,{"inputs":[{"name":"self"},{"name":"str"},{"name":"s"}],"output":{"name":"connectasync"}}],[8,"TlsAcceptorExt","","Extension trait for the `TlsAcceptor` type in the `native_tls` crate.",null,null],[10,"accept_async","","Accepts a new client connection with the provided stream.",11,{"inputs":[{"name":"self"},{"name":"s"}],"output":{"name":"acceptasync"}}],[11,"fmt","","",12,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"get_ref","","Get access to the internal `native_tls::TlsStream` stream which also transitively allows access to `S`.",12,{"inputs":[{"name":"self"}],"output":{"name":"tlsstream"}}],[11,"get_mut","","Get mutable access to the internal `native_tls::TlsStream` stream which also transitively allows mutable access to `S`.",12,{"inputs":[{"name":"self"}],"output":{"name":"tlsstream"}}],[11,"read","","",12,null],[11,"write","","",12,null],[11,"flush","","",12,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"shutdown","","",12,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"poll","","",13,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"poll","","",14,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}]],"paths":[[3,"Server"],[3,"ServerPipelineBind"],[3,"ServerMultiplexBind"],[3,"ServerStreamingPipelineBind"],[3,"ServerStreamingMultiplexBind"],[3,"Client"],[3,"ClientPipelineBind"],[3,"ClientMultiplexBind"],[3,"ClientStreamingPipelineBind"],[3,"ClientStreamingMultiplexBind"],[8,"TlsConnectorExt"],[8,"TlsAcceptorExt"],[3,"TlsStream"],[3,"ConnectAsync"],[3,"AcceptAsync"]]};
initSearch(searchIndex);
