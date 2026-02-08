import { useActor } from './useActor';

// Placeholder for future backend queries
// Currently no backend methods are defined

export function useBackendHealth() {
  const { actor, isFetching } = useActor();
  
  // Example structure for when backend methods are added
  return {
    actor,
    isFetching,
  };
}
