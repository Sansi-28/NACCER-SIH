// app/demo/page.tsx
import { redirect } from 'next/navigation';

export default function DemoPage() {
  // IMPORTANT: Replace this placeholder URL with your actual YouTube video link.
  const youtubeVideoUrl = 'https://youtu.be/9n-5QFXCZYM?si=IaNlMVM3WKSyRYwC'

  // This function will automatically redirect any user who visits /demo
  redirect(youtubeVideoUrl);

  // Because the redirect happens on the server, this component
  // will never actually render anything in the browser.
  // We can return null.
  return null;
}