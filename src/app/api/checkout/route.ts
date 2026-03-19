import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Mock validation
    if (!body.email || !body.name) {
      return NextResponse.json({ error: 'Dados inválidos' }, { status: 400 });
    }

    // Mock processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      {
        success: true,
        message: 'Checkout iniciado (MOCK)',
        checkoutUrl: '/obrigado',
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}
