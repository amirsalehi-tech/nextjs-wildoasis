function Logo() {
  return (
    <a href="/" className="flex z-10 gap-4 items-center">
      <img src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" />
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </a>
  );
}

export default Logo;
