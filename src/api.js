const simulateAsyncDelay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const fakeUserData = {
  username: 'sampleUser',
};
export const authenticateUser = async (emailOrPhone, otp) => {
  await simulateAsyncDelay(1000);
  if (emailOrPhone === 'sample@example.com' && otp === '1234') {
    return fakeUserData;
  } else {
    throw new Error('Invalid credentials');
  }
};
export const placeYogaOrder = async (slot) => {
  await simulateAsyncDelay(1000);
  return { success: true, slot };
};
