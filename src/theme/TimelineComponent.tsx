export default function TimelineComponent({ children }: { children: React.ReactNode }) {
  return (
    <div className="timeline">
      <ul>{children}</ul>
    </div>
  );
}
