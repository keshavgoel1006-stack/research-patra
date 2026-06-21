export async function mockSubmit(payload) {
  await new Promise((resolve) => setTimeout(resolve, 800));
  console.log('[ContactForm] Submission (mock):', payload);
  return { success: true };
}
