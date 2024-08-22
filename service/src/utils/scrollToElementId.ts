type Props = { sectionId: string; behavior: 'smooth' | 'instant' };

export default function scrollToElementId({ sectionId, behavior }: Props) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior, inline: 'center' });
    window.history.replaceState({}, '', null);
  }
}
