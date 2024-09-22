import { getSession } from 'next-auth/react';
import prisma from "../../../prisma/schema.prisma";

export async function GET(request){
    const session = await getSession({req: request});
    if (!session || !session.user.isAdmin) {
        return new Response('Unauthorized', { status: 403 });
      }
    
      const users = await prisma.user.findMany(); // Fetch user data
      return new Response(JSON.stringify(users), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
}