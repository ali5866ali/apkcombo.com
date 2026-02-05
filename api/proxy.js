export const config = {
  runtime: 'edge'
};

export default async function handler(request) {
  try {
    // آدرس اصلی سایت
    const url = new URL(request.url);
    const target = 'https://apkcombo.com' + url.pathname + url.search;
    
    console.log('در حال ارسال به:', target);
    
    // ارسال درخواست
    const response = await fetch(target, {
      method: request.method,
      headers: request.headers
    });
    
    // برگرداندن پاسخ
    return response;
    
  } catch (error) {
    // اگر خطا رخ داد
    return new Response('خطا در اتصال: ' + error.message, {
      status: 500
    });
  }
}