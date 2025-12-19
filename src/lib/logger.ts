/* eslint-disable no-console */
import { showLogger } from '@/constant/env';

/**
 * A logger function that logs only in development
 * @param _object - The object to log
 * @param _comment - Optional comment
 */
export default function logger(_object: unknown, _comment?: string): void {
  if (!showLogger) return;

  // Implementation will be added later
}
