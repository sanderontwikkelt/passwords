/* eslint-disable react/no-array-index-key */
const PulsingRows = ({ length = 3 }: { length?: number }) => (
  <>
    {Array(length)
      .fill(0)
      .map((_, i) => (
        <tr
          key={i}
          className="animate-pulse opacity-10 after:rounded-lg w-full h-12 relative after:bg-white after:absolute after:w-full after:left-0 after:h-10 after:top-1"
        >
          <td />
          <td />
          <td />
          <td className="w-10" />
        </tr>
      ))}
  </>
);

export default PulsingRows;
