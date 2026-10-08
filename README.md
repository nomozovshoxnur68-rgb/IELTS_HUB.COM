# Auth API o'rnatish

1. Paketlar:
   npm i @prisma/client bcryptjs jose
   npm i -D prisma @types/bcryptjs

2. Fayllarni loyihaga ko'chiring (src/ ishlatsangiz, app/ va lib/ shu papka ichiga):
   prisma/schema.prisma, lib/prisma.ts, lib/session.ts, app/api/auth/*

3. .env ga DATABASE_URL va AUTH_SECRET qo'shing (.env.example ga qarang).

4. Bazani yarating:
   npx prisma migrate dev --name init

5. Dev serverni qayta ishga tushiring: npm run dev
