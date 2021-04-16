/* What is a closure? */

/*  A closure gives you access to an outer function’s scope from an inner function.
 * In JavaScript, closures are created every time a function is created,
 * at function creation time. */
const outter = () => {
  let state = 0;

  const inner = () => {
    state++;
    console.log("State increased: ", state);
    return state;
  };

  return inner;
};
const changeState = outter();
changeState(); /* State increased: 1 */
changeState(); /* State increased: 2 */
changeState(); /* State increased: 3 */
