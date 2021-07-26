import { useTweaks } from "use-tweaks";

export default function User() {
  const radius = 32;
  const innerRadius = 8;
  const outerBorder = 5;
  const innerBorder = 4;
  const borderRadius = radius;
  /* @ts-ignore */
  const { innerWidth, offline } = useTweaks({
    innerWidth: { min: 0, max: 26, value: 26, step: 1 },
    offline: true,
  });

  return (
    <svg viewBox="0 0 78 64" width="78">
      <mask id="mask">
        {/*Make everything visible by default*/}
        <rect x={0} y={0} width="78" height={radius * 2} fill="white" />

        {/* Mask out the outer border of the smaller inner circle */}
        <rect
          x={radius * 2 - innerRadius * 2 - outerBorder - innerWidth / 2}
          y={radius * 2 - innerRadius * 2 - outerBorder}
          rx={innerRadius + outerBorder}
          ry={innerRadius + outerBorder}
          width={
            innerRadius * 2 + innerWidth - innerBorder / 2 + outerBorder * 2
          }
          height={innerRadius * 2 - innerBorder / 2 + outerBorder * 2}
          style={{
            transition: "all .3s ease",
          }}
          fill="black"
        />
      </mask>
      <defs>
        <pattern
          id="image"
          x="0%"
          y="0%"
          height="100%"
          width="100%"
          viewBox="0 0 120 120"
        >
          <image
            x="0%"
            y="0%"
            width="120"
            height="120"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABO1BMVEX19fbqQzU0qFNChfT7vAUre/T8+vY7gvR+p/U2gPT7ugCrwvX2/P38+Pz1+fr59/r19/3qNiUopUsfo0bpMh/qOCfqPzD39/b++/btdW38wgDpLxvws7AmpUrX6NyJxZfwqKTvm5bulY/z0tD05+frXlTuiILxu7nsZl3pPjb2nhfB0vX27difvPWVtfVilvTb4/ao0rLj7eYzqkZIrmKWy6O12L7xxMLz4ODtgnvqSDryy8npHgDrVEntg3zrT0P33Kj5rAj34rfuYS36xkTyfiT51IXsVi/wcyj0khz6wzP53poadvT26s76ylrn7Pb50nv27+H5zWzJ1/V9rTjtug9SqkzNtiNZtHCesTZorEZsun+6tCtsnPTG4M00pGdBiOc+j8s6mKY3oXk8k7w5nJJBiOg+itx8wIy0zVxzAAAGZElEQVR4nO2ZaXvaRhRGB7EZWQtakOyIzYCx08RxjAGTpE7StE3SZmubpqV1S7rX//8XdAaBzTISEiiZkXrPJ9uPhXWe9869M2OEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/rcoGIlAvlBYv020EDPUap6V63uNRmOvXj5rthAxZf1i0YDtBuX2vuWYmlZy0TTTsfbb5QG2ZP16m6JI6KxtOVrJSi1iWZqj3TtoxVpSUs52S+ay3Iympu2e4RKOJYrU2rN89SaS5v16LIOUWm2ttFLPRdParbjlKKGGGdSPUDL3UJxiVJR6KYzf2NEqx6dUpcG+GdKPYB4O4lGqirTnrO4vNCyzHAdFpXW4ToAuzj3+V6PUpAz34JRSvFeqVHY28EuRLcADrhWlxoaCmE8fcFyoUnv9JThF22Vt4UM0golPkONVKO0lPcGDzZsM1wkqzUAJWoRYJqgg7xefypVMJ3V+vr9/Ti40KL/NdYJIOvQXLJml3fqDFrm0wSeIVrP80Fo8XXGdIJLqfjVqaVajqUgzV4jk8m3QSM3eAPCdoDLw6zLmozKiHP0UyT44N+Mh6FujpdSB58lWkcqpUiwEy541ajkN3/OQgtoO/4IIed5YWPebq15dOjAt3gWlhpehdhjgQCu1HnEuWHzs3PRoMQ8D/WeC5yExRsl8lqIqmm2+owlK8YmYET+nKGoPkyGIil+ImcyNL5cUS4cJEUS3sSBW/OTmvKP1iPWLRUXx6dgwc0N8NqfoDLhvIAFRMq4hdnw+o6jVk1Kj6NVUECt+dVWp1n5iBKdF6ipejQ2nmZQaRcWvZwwz07Fhcb5JCUNuTnA6NpIU4ZMFw/HYsBIzCheW4XQxPtMOEhOhu6FZ4nmUf8KO8sPWgOKXEV8UvR/IHb3MhuHlVu7j2dDelxaheNvvie1COgz5452PZkPjFdXQJ8LQhuk00zpdbqVE8HWkhtk3TA0f0wyfRmt4l6nh8rDAhk8iNSzc4s/wVZIMv6EZ+rXSNQy3WY4LuuG3fo+ENzxKumH+Dn+G0VYpY8OP0GkYG7748NMiz3YdUvc0fhvv2HUaquF30RpuMz0/3aYZZhI08T1OT37jIrzhW6aGC1dtAVpNzHbeqPg67ELMbWfznlAzZHp6oo4LUfze5yLKvrXlDTVEthc1lGYqvvvB6Kvej9g5L3ZsSoisbzGWW434oyDoQ3mdz7LvZimGTLc0aLnViD8JGKPqE6InuSNKE2I8Dhd3pmLmZyIo6BfrhJg7plQp41aK5m/bxHfChHVCpBZpOstacPZOWPxlKrjWStzZojWaXxkvw5kjIh4SwjXGSVhF+w1tK8B23+0yKVM8JIRZjE7IOqVGyMEynHZTMiTm6Yb7GPstbRWm0+wjHG9rRHdIzBGun9qI6sd8Go6xxemQmMeohVCkTgo+ipSMxHcUP6LYC6y4s0U9ceSPeYgQoY5BNwycor1zh74I2d4GXyP3Kl6KFyhAR7Vz9ARxhsz/AzzFQxC3m251ZYzqm2MPwQIXfYag9r3qlCxG1TdGFZ3kvU79jA+/s8hDT0PB6I5kT0dV7gvG+9/oivxEiF/Us9mMHYcjlSaJf9jv4gf1yu9UxUKRmwhJs/FTFAyhV5XlmXJVVVVGo5oweer0D0ov5aWRTpAvdD9FQTeEWr9KcpNJnNVR76JiXD9y+md6ceLzMgunqLa/IZGsGIbQ7Q67XcEwjIUBU+n+u1CpfGxnZlCrvnW6mtO/5hQLR4xvoJaRfUZGMMW/C/mZGuUsQcKKbhNA8f0/VzHmeeqjV8i1DRV1fTo2Crwtwgny5YaKeGyMFbO3+Oqj10SgSMZGdpu7LnPFxmuRjI2XHAtG0FEF/fQtryXqIo8qK2e/r2C3w2eTuUbuDDeI0bjwP2xxgar2jDVj1MNfJLNBrq4XozHsxEOQxHiih44RBxiDCr1CtmvhSlU3LmMT4AS5c7l4RFrhF6MAXVS50xOCBKkbei+GfgRyETN3lKfqVS761GucmKDKdv8SW9AsdXzqx3p2jPVcVFmu9mvD8dWF7lKp4G+EYa1flWOv56JiS9QZ9U96vRqmd9IfVXEvkuM0HQJAbhDJVRu5bVMT5gYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCG/wAcx7aYV4xYHwAAAABJRU5ErkJggg=="
          ></image>
        </pattern>
      </defs>
      <rect
        x={0}
        y={0}
        width={radius * 2}
        height={radius * 2}
        rx={borderRadius}
        ry={borderRadius}
        mask="url(#mask)"
        fill="url(#image)"
        style={{
          transition: "all .3s ease",
        }}
      />
      <rect
        x={radius * 2 - innerRadius * 2 - innerWidth / 2}
        y={radius * 2 - innerRadius * 2}
        rx={innerRadius}
        ry={innerRadius}
        style={{
          transition: "all .3s ease",
        }}
        width={innerRadius * 2 + innerWidth - innerBorder / 2}
        height={innerRadius * 2 - innerBorder / 2}
        strokeWidth={innerBorder}
        fill={offline ? "transparent" : "#43B581"}
        stroke={offline ? "#aaa" : "#43B581"}
      />
    </svg>
  );
}
