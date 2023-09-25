<script context="module" lang="ts">
  export { load };

  interface ErrorProps {
    status: number;
    message: string;
  }

  function load({ error }: { error: ErrorProps }) {
    return {
      props: {
        status: error.status,
        message: error.message,
      },
    };
  }
</script>
