import net from 'node:net';

const ports = process.argv.slice(2).map((value) => Number(value)).filter(Boolean);

if (ports.length === 0) {
  console.error('使用方法: node scripts/check-ports.mjs <port> [port...]');
  process.exit(1);
}

function checkPort(port) {
  return new Promise((resolve) => {
    const server = net.createServer();

    server.once('error', (error) => {
      if (error && error.code === 'EADDRINUSE') {
        resolve({ port, available: false });
        return;
      }

      resolve({ port, available: false, error });
    });

    server.once('listening', () => {
      server.close(() => resolve({ port, available: true }));
    });

    server.listen(port, '127.0.0.1');
  });
}

const results = await Promise.all(ports.map(checkPort));
const busy = results.filter((result) => !result.available);

if (busy.length > 0) {
  console.error('起動前チェックに失敗しました。必要なポートが既に使用中です。');
  for (const result of busy) {
    console.error(`- ポート ${result.port} は使用中です。既存の Astro / NestJS プロセスを停止してから再実行してください。`);
  }
  process.exit(1);
}

console.log(`ポート確認OK: ${ports.join(', ')}`);
