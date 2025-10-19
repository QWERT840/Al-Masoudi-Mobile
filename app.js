const express = require('express');
const NodeMediaServer = require('node-media-server');

const app = express();

// إعدادات خادم البث
const config = {
  rtmp: {
    port: 3000,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*'
  }
};

var nms = new NodeMediaServer(config);
nms.run();

app.get('/', (req, res) => {
  res.send('🚀 سيرفر البث المباشر جاهز! استخدم port 3000 للبث');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('✅ سيرفر البث شغال على port 3000!');
});
