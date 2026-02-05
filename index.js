// یک پروکسی خیلی ساده
const http = require('http');
const https = require('https');

const server = http.createServer((req, res) => {
    // ساخت آدرس مقصد
    const targetUrl = 'https://apkcombo.com' + req.url;
    
    console.log('درخواست برای:', targetUrl);
    
    // ارسال درخواست
    https.get(targetUrl, (proxyRes) => {
        // ارسال هدرها
        res.writeHead(proxyRes.statusCode, proxyRes.headers);
        
        // ارسال داده
        proxyRes.pipe(res);
    }).on('error', (err) => {
        res.writeHead(500);
        res.end('خطا: ' + err.message);
    });
});

// راه‌اندازی سرور
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`✅ سرور پروکسی روی پورت ${PORT} فعال شد!`);
    console.log(`🌐 آدرس محلی: http://localhost:${PORT}`);
    console.log(`📱 مثال: http://localhost:3000/free-fire/com.garena.game.kgth`);
});
