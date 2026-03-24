export default function EventComponent({ interval, children }: { interval?: string; children: React.ReactNode }) {
  return (
    <li className="timeline-event">
      <div className="timeline-event__interval-container">
        <div className="timeline-event__icon" />
        {interval && <p className="timeline-event__interval">{interval}</p>}
      </div>
      <div className="timeline-event__content">
        <h3 className="timeline-event__title"></h3>
        <div className="timeline-event__description">{children}</div>
      </div>
    </li>
  );
}
